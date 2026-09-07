import React, { useState, useEffect, useRef } from 'react'

export function VanishText({
  phrases = [
    'Plan. Procure. Track. Control.',
    'BOQ & Cost Estimation Hub',
    'Site Ops & Subcontractor Control',
    'Unified Construction Platform'
  ],
  className = '',
  displayDuration = 3000,
  vanishDuration = 800,
  materializeDuration = 900
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const containerRef = useRef(null)
  const textRef = useRef(null)
  const canvasRef = useRef(null)
  const animFrameRef = useRef(null)
  const isVisibleRef = useRef(true)

  // Detect reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReducedMotion(mediaQuery.matches)
    const listener = (e) => setIsReducedMotion(e.matches)
    mediaQuery.addEventListener('change', listener)
    return () => mediaQuery.removeEventListener('change', listener)
  }, [])

  // IntersectionObserver to pause animation when off-screen
  useEffect(() => {
    if (!containerRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting
      },
      { threshold: 0.1 }
    )
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  // Tab visibility change detection to pause inactive tabs
  useEffect(() => {
    const handleVisChange = () => {
      isVisibleRef.current = document.visibilityState === 'visible'
    }
    document.addEventListener('visibilitychange', handleVisChange)
    return () => document.removeEventListener('visibilitychange', handleVisChange)
  }, [])

  // Canvas Particle Dissolve & Reassembly Engine
  useEffect(() => {
    if (isReducedMotion) return

    const currentText = phrases[currentIndex]
    const nextIndex = (currentIndex + 1) % phrases.length
    const container = containerRef.current
    const canvas = canvasRef.current
    const textEl = textRef.current
    if (!container || !canvas || !textEl) return

    const ctx = canvas.getContext('2d', { willReadFrequently: true })
    if (!ctx) return

    let cancelled = false
    let phase = 'hold' // 'hold' | 'vanish' | 'materialize'
    let startTime = performance.now()
    let particles = []

    // Helper: sample pixel coordinates of text rendered on offscreen canvas
    const sampleTextParticles = (text, width, height, fontStyle) => {
      const offCanvas = document.createElement('canvas')
      offCanvas.width = width
      offCanvas.height = height
      const offCtx = offCanvas.getContext('2d', { willReadFrequently: true })
      if (!offCtx) return { pts: [], minX: 0, maxX: width }

      offCtx.font = fontStyle
      offCtx.textAlign = 'center'
      offCtx.textBaseline = 'middle'

      // High-contrast golden gradient
      const grad = offCtx.createLinearGradient(0, 0, width, height)
      grad.addColorStop(0, '#ffffff')
      grad.addColorStop(0.35, '#fef08a')
      grad.addColorStop(0.7, '#fbbf24')
      grad.addColorStop(1, '#f59e0b')
      offCtx.fillStyle = grad

      offCtx.fillText(text, width / 2, height / 2)

      const imgData = offCtx.getImageData(0, 0, width, height)
      const data = imgData.data
      const pts = []
      const step = Math.max(2, Math.floor(width / 320))

      let maxX = 0, minX = width
      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const index = (y * width + x) * 4
          const alpha = data[index + 3]
          if (alpha > 30) {
            pts.push({
              x,
              y,
              r: data[index],
              g: data[index + 1],
              b: data[index + 2],
              a: alpha / 255
            })
            if (x > maxX) maxX = x
            if (x < minX) minX = x
          }
        }
      }
      return { pts, minX, maxX }
    }

    const setupCanvas = () => {
      const rect = textEl.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      const w = Math.ceil(rect.width) + 40
      const h = Math.ceil(rect.height) + 20

      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.scale(dpr, dpr)

      const computed = window.getComputedStyle(textEl)
      const fontStyle = `${computed.fontWeight} ${computed.fontSize} ${computed.fontFamily}`

      return { w, h, fontStyle }
    }

    let { w, h, fontStyle } = setupCanvas()

    // Particles for current text vanish (right-to-left sweep)
    const initVanishParticles = () => {
      const sampled = sampleTextParticles(currentText, w, h, fontStyle)
      const pts = sampled.pts || []
      const maxX = sampled.maxX || w
      const minX = sampled.minX || 0
      const spanX = Math.max(1, maxX - minX)

      return pts.map((p) => {
        const normX = (p.x - minX) / spanX
        const sweepDelay = (1 - normX) * 0.45 // Rightmost particles sweep first
        return {
          x: p.x,
          y: p.y,
          vx: (Math.random() - 0.7) * 2.5,
          vy: (Math.random() - 0.5) * 1.8,
          size: Math.random() * 1.5 + 1.2,
          alpha: p.a,
          color: `rgba(${p.r}, ${p.g}, ${p.b}, `,
          sweepDelay
        }
      })
    }

    // Particles for next text materialize (flying in right-to-left)
    const initMaterializeParticles = () => {
      const sampled = sampleTextParticles(phrases[nextIndex], w, h, fontStyle)
      const pts = sampled.pts || []
      const maxX = sampled.maxX || w
      const minX = sampled.minX || 0
      const spanX = Math.max(1, maxX - minX)

      return pts.map((p) => {
        const normX = (p.x - minX) / spanX
        const sweepDelay = (1 - normX) * 0.4
        const angle = Math.random() * Math.PI * 2
        const dist = 30 + Math.random() * 45
        return {
          targetX: p.x,
          targetY: p.y,
          startX: p.x + (Math.cos(angle) * dist + 15),
          startY: p.y + Math.sin(angle) * dist,
          x: p.x + (Math.cos(angle) * dist + 15),
          y: p.y + Math.sin(angle) * dist,
          size: Math.random() * 1.4 + 1.1,
          maxAlpha: p.a,
          color: `rgba(${p.r}, ${p.g}, ${p.b}, `,
          sweepDelay
        }
      })
    }

    // Render loop
    const renderLoop = (timestamp) => {
      if (cancelled) return

      if (!isVisibleRef.current) {
        animFrameRef.current = requestAnimationFrame(renderLoop)
        return
      }

      const elapsed = timestamp - startTime

      if (phase === 'hold') {
        textEl.style.opacity = '1'
        ctx.clearRect(0, 0, w, h)
        if (elapsed >= displayDuration) {
          phase = 'vanish'
          startTime = timestamp
          particles = initVanishParticles()
          textEl.style.opacity = '0'
        }
      } else if (phase === 'vanish') {
        ctx.clearRect(0, 0, w, h)
        const progress = Math.min(1, elapsed / vanishDuration)

        let allFaded = true
        particles.forEach((p) => {
          const particleProgress = Math.max(0, (progress - p.sweepDelay) / (1 - p.sweepDelay || 1))
          if (particleProgress > 0) {
            p.x += p.vx * 1.2
            p.y += p.vy * 0.8
            p.alpha = Math.max(0, 1 - particleProgress * 1.3)
          }
          if (p.alpha > 0.02) {
            allFaded = false
            ctx.fillStyle = `${p.color}${p.alpha})`
            ctx.beginPath()
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
            ctx.fill()
          }
        })

        if (progress >= 1 || allFaded) {
          phase = 'materialize'
          startTime = timestamp
          particles = initMaterializeParticles()
          setCurrentIndex(nextIndex)
        }
      } else if (phase === 'materialize') {
        ctx.clearRect(0, 0, w, h)
        const progress = Math.min(1, elapsed / materializeDuration)

        particles.forEach((p) => {
          const particleProgress = Math.min(1, Math.max(0, (progress - p.sweepDelay) / (1 - p.sweepDelay || 1)))
          const easeProgress = 1 - Math.pow(1 - particleProgress, 3)
          p.x = p.startX + (p.targetX - p.startX) * easeProgress
          p.y = p.startY + (p.targetY - p.startY) * easeProgress
          const alpha = p.maxAlpha * easeProgress

          ctx.fillStyle = `${p.color}${alpha})`
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx.fill()
        })

        if (progress >= 1) {
          phase = 'hold'
          startTime = timestamp
          ctx.clearRect(0, 0, w, h)
          textEl.style.opacity = '1'
        }
      }

      animFrameRef.current = requestAnimationFrame(renderLoop)
    }

    animFrameRef.current = requestAnimationFrame(renderLoop)

    return () => {
      cancelled = true
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
    }
  }, [currentIndex, displayDuration, vanishDuration, materializeDuration, phrases, isReducedMotion])

  return (
    <span
      ref={containerRef}
      className={`vanish-text-container position-relative d-inline-block ${className}`}
      style={{ verticalAlign: 'bottom' }}
    >
      {/* Accessible DOM Text Element */}
      <span
        ref={textRef}
        className="vanish-text-label d-inline-block"
      >
        {phrases[currentIndex]}
      </span>

      {/* Decorative Particle Canvas */}
      {!isReducedMotion && (
        <canvas
          ref={canvasRef}
          className="vanish-text-canvas position-absolute top-50 start-50 translate-middle"
          aria-hidden="true"
          style={{ pointerEvents: 'none' }}
        />
      )}
    </span>
  )
}
