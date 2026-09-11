import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react, require_react_dom } from "../_libs/@tanstack/react-router+[...].mjs";
import { Archive, ArrowDownRight, ArrowRight, Building2, Calculator, ChartColumn, ChartNoAxesColumnIncreasing, ChevronLeft, ChevronRight, ChevronUp, CircleCheck, CircleQuestionMark, CircleX, Clipboard, ClipboardCheck, ClipboardList, Clock, Cpu, DollarSign, FileChartColumn, FileCheckCorner, FileSpreadsheet, FileText, Folder, FolderClosed, FolderGit2, FolderKanban, IndianRupee, Info, Key, Layers, LayoutGrid, Link, Mail, MapPin, Menu, MessageSquareQuote, PackageCheck, Phone, Plus, Scale, Search, Send, Server, Settings, Shield, ShieldAlert, ShieldCheck, ShoppingCart, SlidersHorizontal, Sparkles, Star, TriangleAlert, UserCheck, Users, UsersRound, X } from "../_libs/lucide-react.mjs";
import { image_default } from "./router-B3go9HJ9.mjs";
import { require_dist } from "../_libs/react-fast-marquee.mjs";
import { SiBootstrap, SiDjango, SiHtml5, SiPostgresql, SiPython, SiReact } from "../_libs/react-icons.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BI4OebBN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_react_dom = require_react_dom();
var import_dist = /* @__PURE__ */ __toESM(require_dist());
var GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw4xEh99CqMOKHhkHnUHffWA7Ni9OxzZHyg2t6iV1M1t34rxvu9XRS03GJVTIowtjAi/exec";
function EnquiryForm({ isModal = false, onClose }) {
	const [formData, setFormData] = (0, import_react.useState)({
		name: "",
		email: "",
		phone: "",
		company: "",
		subject: "Request Demo",
		message: ""
	});
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [status, setStatus] = (0, import_react.useState)({
		type: null,
		message: ""
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value
		}));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (isSubmitting) return;
		setIsSubmitting(true);
		setStatus({
			type: null,
			message: ""
		});
		try {
			const params = new URLSearchParams();
			params.append("Name", formData.name);
			params.append("Email", formData.email);
			params.append("Mobile", formData.phone);
			params.append("Company_name", formData.company);
			params.append("Enquiry", formData.subject);
			params.append("Message", formData.message);
			params.append("name", formData.name);
			params.append("email", formData.email);
			params.append("phone", formData.phone);
			params.append("company", formData.company);
			params.append("subject", formData.subject);
			params.append("message", formData.message);
			let response;
			let isOpaque = false;
			try {
				response = await fetch(GOOGLE_SCRIPT_URL, {
					method: "POST",
					body: params
				});
			} catch (err) {
				response = await fetch(GOOGLE_SCRIPT_URL, {
					method: "POST",
					mode: "no-cors",
					body: params
				});
				isOpaque = true;
			}
			let success = false;
			if (isOpaque || response.type === "opaque") success = true;
			else if (response.ok) try {
				const text = await response.text();
				if (text.includes("Error:") || text.includes("<!DOCTYPE") || text.includes("<html")) {
					console.error("Google Script returned HTML error:", text);
					success = false;
				} else try {
					success = JSON.parse(text).success !== false;
				} catch {
					success = text.includes("Added");
				}
			} catch {
				success = false;
			}
			if (!success) throw new Error("Google Sheet submission failed");
			setStatus({
				type: "success",
				message: "Submitted Successfully"
			});
			alert("Enquiry submitted successfully");
			setFormData({
				name: "",
				email: "",
				phone: "",
				company: "",
				subject: "Request Demo",
				message: ""
			});
			if (isModal && onClose) onClose();
		} catch (error) {
			console.error("Enquiry submission failed:", error);
			setStatus({
				type: "error",
				message: "Failed to submit enquiry. Please try again."
			});
			alert("Failed to submit enquiry. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};
	const idPrefix = isModal ? "modal-contact-" : "contact-";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSubmit,
		className: "row g-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "col-12 col-md-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: `${idPrefix}name`,
					className: "form-label small text-slate-400 font-monospace",
					style: { fontSize: "0.75rem" },
					children: "YOUR NAME *"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "text",
					className: "glass-input",
					id: `${idPrefix}name`,
					name: "name",
					value: formData.name,
					onChange: handleChange,
					placeholder: "Your Name",
					required: true
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "col-12 col-md-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: `${idPrefix}email`,
					className: "form-label small text-slate-400 font-monospace",
					style: { fontSize: "0.75rem" },
					children: "EMAIL ADDRESS *"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "email",
					className: "glass-input",
					id: `${idPrefix}email`,
					name: "email",
					value: formData.email,
					onChange: handleChange,
					placeholder: "Your Email",
					required: true
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "col-12 col-md-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: `${idPrefix}phone`,
					className: "form-label small text-slate-400 font-monospace",
					style: { fontSize: "0.75rem" },
					children: "MOBILE NUMBER *"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "tel",
					className: "glass-input",
					id: `${idPrefix}phone`,
					name: "phone",
					value: formData.phone,
					onChange: handleChange,
					placeholder: "Mobile Number",
					required: true
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "col-12 col-md-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: `${idPrefix}company`,
					className: "form-label small text-slate-400 font-monospace",
					style: { fontSize: "0.75rem" },
					children: "COMPANY NAME *"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "text",
					className: "glass-input",
					id: `${idPrefix}company`,
					name: "company",
					value: formData.company,
					onChange: handleChange,
					placeholder: "Company Name",
					required: true
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "col-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: `${idPrefix}subject`,
					className: "form-label small text-slate-400 font-monospace",
					style: { fontSize: "0.75rem" },
					children: "ENQUIRY TYPE *"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: "glass-input",
					id: `${idPrefix}subject`,
					name: "subject",
					value: formData.subject,
					onChange: handleChange,
					required: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "Request Demo",
							children: "Request Product Demonstration"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "Enterprise Pricing",
							children: "Enterprise SLA & Custom Pricing"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "Scoping & Customization",
							children: "Database / Scoping Scenarios"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "General Inquiry",
							children: "General Platform Inquiry"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "col-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: `${idPrefix}message`,
					className: "form-label small text-slate-400 font-monospace",
					style: { fontSize: "0.75rem" },
					children: "MESSAGE *"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					className: "glass-input",
					id: `${idPrefix}message`,
					name: "message",
					value: formData.message,
					onChange: handleChange,
					rows: "3",
					placeholder: "Tell us about your project requirements...",
					required: true
				})]
			}),
			status.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `col-12 alert ${status.type === "success" ? "alert-success bg-success bg-opacity-20 text-success border-success border-opacity-30" : "alert-danger bg-danger bg-opacity-20 text-danger border-danger border-opacity-30"} py-2 px-3 mb-0 rounded small text-center`,
				children: status.message
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "col-12 mt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "submit",
					disabled: isSubmitting,
					className: "glass-button glass-button-primary w-100 py-2.5 d-flex align-items-center justify-content-center gap-2",
					style: isSubmitting ? {
						opacity: .7,
						cursor: "not-allowed"
					} : {},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Book Enquiry" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { size: 16 })]
				})
			})
		]
	});
}
function EnquiryModal({ isOpen, onClose }) {
	(0, import_react.useEffect)(() => {
		if (!isOpen) return;
		const scrollY = window.scrollY || window.pageYOffset || 0;
		const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
		const originalOverflow = document.body.style.overflow;
		const originalPaddingRight = document.body.style.paddingRight;
		document.body.style.overflow = "hidden";
		if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
		const handleKeyDown = (e) => {
			if (e.key === "Escape") {
				onClose();
				return;
			}
			if ([
				"ArrowUp",
				"ArrowDown",
				"PageUp",
				"PageDown",
				"Space",
				"Home",
				"End"
			].includes(e.key)) {
				const activeEl = document.activeElement;
				const isEditable = activeEl && [
					"INPUT",
					"TEXTAREA",
					"SELECT"
				].includes(activeEl.tagName);
				const isInsideModal = activeEl && activeEl.closest(".erp-enquiry-modal-dialog");
				if (!isEditable && !isInsideModal) e.preventDefault();
			}
		};
		const handleTouchMove = (e) => {
			const modalBody = document.querySelector(".erp-enquiry-modal-body");
			if (modalBody && modalBody.contains(e.target)) return;
			e.preventDefault();
		};
		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("touchmove", handleTouchMove, { passive: false });
		return () => {
			document.body.style.overflow = originalOverflow;
			document.body.style.paddingRight = originalPaddingRight;
			window.scrollTo(0, scrollY);
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("touchmove", handleTouchMove);
		};
	}, [isOpen, onClose]);
	if (!isOpen) return null;
	return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "erp-enquiry-modal-backdrop erp-portfolio-page",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "erp-enquiry-modal-dialog",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "erp-enquiry-modal-header d-flex align-items-center justify-content-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h5", {
					className: "fw-bold text-white m-0 font-monospace",
					style: { fontSize: "1.1rem" },
					children: [
						"Construction",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-warning",
							children: "ERP"
						}),
						" Enquiry"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "small text-slate-400 font-monospace",
					style: { fontSize: "0.725rem" },
					children: "Schedule a live demo or enterprise consultation"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn btn-sm btn-outline-secondary text-slate-400 hover-text-white border-opacity-40 p-1.5 d-flex align-items-center justify-content-center",
					onClick: onClose,
					"aria-label": "Close",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "erp-enquiry-modal-body",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryForm, {
					isModal: true,
					onClose
				})
			})]
		})
	}), document.body);
}
function ContactSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "section-padding position-relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ambient-glow glow-orange",
				style: {
					top: "20%",
					left: "5%"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ambient-glow glow-blue",
				style: {
					bottom: "10%",
					right: "5%"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container position-relative z-index-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "erp-section-badge mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
								size: 14,
								className: "text-warning"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-warning fw-semibold small text-uppercase",
								style: { letterSpacing: "0.05em" },
								children: "Get In Touch"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "display-5 fw-bold mb-3 text-white",
							style: { fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif" },
							children: [
								"Ready to Build Smarter with ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-warning",
									children: "ConstructionERP"
								}),
								"?"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lead fw-semibold mx-auto max-w-3xl",
							style: { fontSize: "1.1rem" },
							children: "Get in touch with our team for project inquiries, enterprise deployment scoping, or to schedule a live product demonstration."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "row g-4 mt-2 justify-content-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-12 col-lg-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "erp-contact-info p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "fw-bold text-white fs-4 font-monospace mb-3 d-block",
									children: ["Construction", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-warning",
										children: "ERP"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-slate-400 small mb-4 leading-relaxed",
									style: { fontSize: "0.85rem" },
									children: "Engineered to keep site operations, material logs, subcontractor billing, head-office audits, and enterprise accounts synchronized in one secure platform."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "d-flex flex-column gap-3 mt-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "d-flex align-items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "p-2 bg-dark bg-opacity-40 rounded border border-secondary text-warning mt-1 d-flex align-items-center justify-content-center",
												style: {
													width: "36px",
													height: "36px"
												},
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 16 })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "small text-slate-500 font-monospace",
												style: { fontSize: "0.7rem" },
												children: "EMAIL INQUIRIES"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "mailto:akashkarnan02@gmail.com",
												className: "text-white text-decoration-none small hover-text-warning transition",
												children: "akashkarnan02@gmail.com"
											})] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "d-flex align-items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "p-2 bg-dark bg-opacity-40 rounded border border-secondary text-warning mt-1 d-flex align-items-center justify-content-center",
												style: {
													width: "36px",
													height: "36px"
												},
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 16 })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "small text-slate-500 font-monospace",
												style: { fontSize: "0.7rem" },
												children: "CALL PLATFORM TEAM"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "tel:+919345631281",
												className: "text-white text-decoration-none small hover-text-warning transition",
												children: "+91-9345631281"
											})] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "d-flex align-items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "p-2 bg-dark bg-opacity-40 rounded border border-secondary text-warning mt-1 d-flex align-items-center justify-content-center",
												style: {
													width: "36px",
													height: "36px"
												},
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 16 })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "small text-slate-500 font-monospace",
												style: { fontSize: "0.7rem" },
												children: "ADDRESS"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-slate-300 small",
												children: "IUDP Colony, Selvapuram, Coimbatore - 641026"
											})] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "d-flex align-items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "p-2 bg-dark bg-opacity-40 rounded border border-secondary text-warning mt-1 d-flex align-items-center justify-content-center",
												style: {
													width: "36px",
													height: "36px"
												},
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { size: 16 })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "small text-slate-500 font-monospace",
												style: { fontSize: "0.7rem" },
												children: "WORKING HOURS"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-slate-300 small",
												children: "Mon - Fri: 8:00 AM - 6:00 PM (IST)"
											})] })]
										})
									]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 pt-3 border-top border-secondary border-opacity-40 text-slate-500 small font-monospace",
								style: { fontSize: "0.7rem" },
								children: "* Field offices can submit logs 24/7 via offline sync protocols."
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-12 col-lg-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "erp-contact-form-card p-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryForm, {})
						})
					})]
				})]
			})
		]
	});
}
function VanishText({ phrases = [
	"Plan. Procure. Track. Control.",
	"BOQ & Cost Estimation Hub",
	"Site Ops & Subcontractor Control",
	"Unified Construction Platform"
], className = "", displayDuration = 3e3, vanishDuration = 800, materializeDuration = 900 }) {
	const [currentIndex, setCurrentIndex] = (0, import_react.useState)(0);
	const [isReducedMotion, setIsReducedMotion] = (0, import_react.useState)(false);
	const containerRef = (0, import_react.useRef)(null);
	const textRef = (0, import_react.useRef)(null);
	const canvasRef = (0, import_react.useRef)(null);
	const animFrameRef = (0, import_react.useRef)(null);
	const isVisibleRef = (0, import_react.useRef)(true);
	(0, import_react.useEffect)(() => {
		const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
		setIsReducedMotion(mediaQuery.matches);
		const listener = (e) => setIsReducedMotion(e.matches);
		mediaQuery.addEventListener("change", listener);
		return () => mediaQuery.removeEventListener("change", listener);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!containerRef.current) return;
		const observer = new IntersectionObserver(([entry]) => {
			isVisibleRef.current = entry.isIntersecting;
		}, { threshold: .1 });
		observer.observe(containerRef.current);
		return () => observer.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		const handleVisChange = () => {
			isVisibleRef.current = document.visibilityState === "visible";
		};
		document.addEventListener("visibilitychange", handleVisChange);
		return () => document.removeEventListener("visibilitychange", handleVisChange);
	}, []);
	(0, import_react.useEffect)(() => {
		if (isReducedMotion) return;
		const currentText = phrases[currentIndex];
		const nextIndex = (currentIndex + 1) % phrases.length;
		const container = containerRef.current;
		const canvas = canvasRef.current;
		const textEl = textRef.current;
		if (!container || !canvas || !textEl) return;
		const ctx = canvas.getContext("2d", { willReadFrequently: true });
		if (!ctx) return;
		let cancelled = false;
		let phase = "hold";
		let startTime = performance.now();
		let particles = [];
		const sampleTextParticles = (text, width, height, fontStyle) => {
			const offCanvas = document.createElement("canvas");
			offCanvas.width = width;
			offCanvas.height = height;
			const offCtx = offCanvas.getContext("2d", { willReadFrequently: true });
			if (!offCtx) return {
				pts: [],
				minX: 0,
				maxX: width
			};
			offCtx.font = fontStyle;
			offCtx.textAlign = "center";
			offCtx.textBaseline = "middle";
			const grad = offCtx.createLinearGradient(0, 0, width, height);
			grad.addColorStop(0, "#ffffff");
			grad.addColorStop(.35, "#fef08a");
			grad.addColorStop(.7, "#fbbf24");
			grad.addColorStop(1, "#f59e0b");
			offCtx.fillStyle = grad;
			offCtx.fillText(text, width / 2, height / 2);
			const data = offCtx.getImageData(0, 0, width, height).data;
			const pts = [];
			const step = Math.max(2, Math.floor(width / 320));
			let maxX = 0, minX = width;
			for (let y = 0; y < height; y += step) for (let x = 0; x < width; x += step) {
				const index = (y * width + x) * 4;
				const alpha = data[index + 3];
				if (alpha > 30) {
					pts.push({
						x,
						y,
						r: data[index],
						g: data[index + 1],
						b: data[index + 2],
						a: alpha / 255
					});
					if (x > maxX) maxX = x;
					if (x < minX) minX = x;
				}
			}
			return {
				pts,
				minX,
				maxX
			};
		};
		const setupCanvas = () => {
			const rect = textEl.getBoundingClientRect();
			const dpr = window.devicePixelRatio || 1;
			const w = Math.ceil(rect.width) + 40;
			const h = Math.ceil(rect.height) + 20;
			canvas.width = w * dpr;
			canvas.height = h * dpr;
			canvas.style.width = `${w}px`;
			canvas.style.height = `${h}px`;
			ctx.scale(dpr, dpr);
			const computed = window.getComputedStyle(textEl);
			return {
				w,
				h,
				fontStyle: `${computed.fontWeight} ${computed.fontSize} ${computed.fontFamily}`
			};
		};
		let { w, h, fontStyle } = setupCanvas();
		const initVanishParticles = () => {
			const sampled = sampleTextParticles(currentText, w, h, fontStyle);
			const pts = sampled.pts || [];
			const maxX = sampled.maxX || w;
			const minX = sampled.minX || 0;
			const spanX = Math.max(1, maxX - minX);
			return pts.map((p) => {
				const sweepDelay = (1 - (p.x - minX) / spanX) * .45;
				return {
					x: p.x,
					y: p.y,
					vx: (Math.random() - .7) * 2.5,
					vy: (Math.random() - .5) * 1.8,
					size: Math.random() * 1.5 + 1.2,
					alpha: p.a,
					color: `rgba(${p.r}, ${p.g}, ${p.b}, `,
					sweepDelay
				};
			});
		};
		const initMaterializeParticles = () => {
			const sampled = sampleTextParticles(phrases[nextIndex], w, h, fontStyle);
			const pts = sampled.pts || [];
			const maxX = sampled.maxX || w;
			const minX = sampled.minX || 0;
			const spanX = Math.max(1, maxX - minX);
			return pts.map((p) => {
				const sweepDelay = (1 - (p.x - minX) / spanX) * .4;
				const angle = Math.random() * Math.PI * 2;
				const dist = 30 + Math.random() * 45;
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
				};
			});
		};
		const renderLoop = (timestamp) => {
			if (cancelled) return;
			if (!isVisibleRef.current) {
				animFrameRef.current = requestAnimationFrame(renderLoop);
				return;
			}
			const elapsed = timestamp - startTime;
			if (phase === "hold") {
				textEl.style.opacity = "1";
				ctx.clearRect(0, 0, w, h);
				if (elapsed >= displayDuration) {
					phase = "vanish";
					startTime = timestamp;
					particles = initVanishParticles();
					textEl.style.opacity = "0";
				}
			} else if (phase === "vanish") {
				ctx.clearRect(0, 0, w, h);
				const progress = Math.min(1, elapsed / vanishDuration);
				let allFaded = true;
				particles.forEach((p) => {
					const particleProgress = Math.max(0, (progress - p.sweepDelay) / (1 - p.sweepDelay || 1));
					if (particleProgress > 0) {
						p.x += p.vx * 1.2;
						p.y += p.vy * .8;
						p.alpha = Math.max(0, 1 - particleProgress * 1.3);
					}
					if (p.alpha > .02) {
						allFaded = false;
						ctx.fillStyle = `${p.color}${p.alpha})`;
						ctx.beginPath();
						ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
						ctx.fill();
					}
				});
				if (progress >= 1 || allFaded) {
					phase = "materialize";
					startTime = timestamp;
					particles = initMaterializeParticles();
					setCurrentIndex(nextIndex);
				}
			} else if (phase === "materialize") {
				ctx.clearRect(0, 0, w, h);
				const progress = Math.min(1, elapsed / materializeDuration);
				particles.forEach((p) => {
					const particleProgress = Math.min(1, Math.max(0, (progress - p.sweepDelay) / (1 - p.sweepDelay || 1)));
					const easeProgress = 1 - Math.pow(1 - particleProgress, 3);
					p.x = p.startX + (p.targetX - p.startX) * easeProgress;
					p.y = p.startY + (p.targetY - p.startY) * easeProgress;
					const alpha = p.maxAlpha * easeProgress;
					ctx.fillStyle = `${p.color}${alpha})`;
					ctx.beginPath();
					ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
					ctx.fill();
				});
				if (progress >= 1) {
					phase = "hold";
					startTime = timestamp;
					ctx.clearRect(0, 0, w, h);
					textEl.style.opacity = "1";
				}
			}
			animFrameRef.current = requestAnimationFrame(renderLoop);
		};
		animFrameRef.current = requestAnimationFrame(renderLoop);
		return () => {
			cancelled = true;
			if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
		};
	}, [
		currentIndex,
		displayDuration,
		vanishDuration,
		materializeDuration,
		phrases,
		isReducedMotion
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref: containerRef,
		className: `vanish-text-container position-relative d-inline-block ${className}`,
		style: { verticalAlign: "bottom" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			ref: textRef,
			className: "vanish-text-label d-inline-block",
			children: phrases[currentIndex]
		}), !isReducedMotion && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
			ref: canvasRef,
			className: "vanish-text-canvas position-absolute top-50 start-50 translate-middle",
			"aria-hidden": "true",
			style: { pointerEvents: "none" }
		})]
	});
}
function Hero() {
	const [isModalOpen, setIsModalOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "hero",
		className: "position-relative overflow-hidden min-vh-100 d-flex align-items-center section-padding",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ambient-glow glow-orange glow-pulse",
				style: {
					top: "-10%",
					left: "-10%"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ambient-glow glow-blue glow-pulse",
				style: {
					bottom: "-10%",
					right: "-10%"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container position-relative z-index-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "row justify-content-center text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-12 col-lg-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "erp-section-badge mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "spinner-grow spinner-grow-sm text-warning",
									role: "status",
									"aria-hidden": "true",
									style: {
										width: "8px",
										height: "8px"
									}
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-warning fw-bold small tracking-wider text-uppercase",
									style: { letterSpacing: "0.08em" },
									children: "ConstructionERP"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "display-3 fw-bold mb-4 tracking-tight text-white",
								style: {
									fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif",
									lineHeight: "1.35"
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VanishText, {
										phrases: [
											"Plan. Procure. Track. Control.",
											"BOQ & Cost Estimation Hub",
											"Site & Subcontractor Control",
											"Unified Construction Platform"
										],
										className: "vanish-text-highlight"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"All in One ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "gradient-text",
										children: "ConstructionERP"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "lead fw-semibold mx-auto mb-5 max-w-3xl",
								style: {
									fontSize: "1.2rem",
									lineHeight: "1.75"
								},
								children: "Unify your construction project management, BOQ estimation, procurement, inventory, subcontractor lifecycle, and finance under a single secure platform. Connect site operations, store logs, and head-office audits into a unified role-based operational hub."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "d-flex justify-content-center mb-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setIsModalOpen(true),
									className: "erp-cta-primary erp-explore-cta",
									"aria-label": "Explore ConstructionERP",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "erp-explore-cta__shimmer",
											"aria-hidden": "true"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Explore ConstructionERP" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
											size: 18,
											className: "erp-explore-cta__arrow"
										})
									]
								})
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "row mt-5 justify-content-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-12 col-md-10 col-lg-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-card p-4 animate-float",
							style: { border: "1px solid rgba(255,255,255,0.06)" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "d-flex align-items-center justify-content-between border-bottom border-secondary pb-3 mb-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "d-flex align-items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "rounded-circle bg-danger",
												style: {
													width: "10px",
													height: "10px"
												}
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "rounded-circle bg-warning",
												style: {
													width: "10px",
													height: "10px"
												}
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "rounded-circle bg-success",
												style: {
													width: "10px",
													height: "10px"
												}
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "small text-slate-400 font-monospace",
										style: { fontSize: "0.75rem" },
										children: "construction_erp_core_hub"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "row g-3 text-start",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "col-12 col-md-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3 rounded bg-dark bg-opacity-50 border border-secondary",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "d-flex align-items-center justify-content-between mb-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "small text-slate-400",
													style: { fontSize: "0.75rem" },
													children: "Total Budget"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, {
													size: 14,
													className: "text-primary"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
												className: "font-monospace fw-bold m-0 text-primary",
												children: "₹8,45,20,000"
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "col-12 col-md-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3 rounded bg-dark bg-opacity-50 border border-secondary",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "d-flex align-items-center justify-content-between mb-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "small text-slate-400",
													style: { fontSize: "0.75rem" },
													children: "BOQ Items"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, {
													size: 14,
													className: "text-warning"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
												className: "font-monospace fw-bold m-0 text-warning",
												children: "412"
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "col-12 col-md-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3 rounded bg-dark bg-opacity-50 border border-secondary",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "d-flex align-items-center justify-content-between mb-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "small text-slate-400",
													style: { fontSize: "0.75rem" },
													children: "Active Tasks"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, {
													size: 14,
													className: "text-success"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
												className: "font-monospace fw-bold m-0 text-success",
												children: "11"
											})]
										})
									})
								]
							})]
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryModal, {
				isOpen: isModalOpen,
				onClose: () => setIsModalOpen(false)
			})
		]
	});
}
var m1image_default = "/assets/m1image-bv0sBpHh.png";
var M2image_default = "/assets/M2image-4zK4e-12.png";
var m3image_default = "/assets/m3image-DKlAIJbG.png";
var m4image_default = "/assets/m4image-inr2vMqh.png";
var m5image_default = "/assets/m5image-B9EVEIBr.png";
var m6image_default = "/assets/m6image-CW70UN1Z.png";
var m7image_default = "/assets/m7image-BToZoWMn.png";
function Overview() {
	const steps = [
		{
			name: "Projects",
			desc: "Initialize and track sites",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderGit2, { className: "text-primary" }),
			image: m1image_default
		},
		{
			name: "BOQ",
			desc: "Detailed bill of quantities",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, { className: "text-warning" }),
			image: M2image_default
		},
		{
			name: "Procurement",
			desc: "Material requests & POs",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "text-info" }),
			image: m3image_default
		},
		{
			name: "Inventory",
			desc: "Stock management & consumption",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, { className: "text-success" }),
			image: m4image_default
		},
		{
			name: "Subcontractors",
			desc: "Work orders & bill approvals",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "text-purple" }),
			image: m5image_default
		},
		{
			name: "Finance",
			desc: "PO costs vs actual spends",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndianRupee, { className: "text-danger" }),
			image: m6image_default
		},
		{
			name: "Reports",
			desc: "Project consumption metrics",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileChartColumn, { className: "text-light" }),
			image: m7image_default
		}
	];
	const [activeIdx, setActiveIdx] = (0, import_react.useState)(0);
	const trackRef = (0, import_react.useRef)(null);
	const scrollToCard = (idx) => {
		if (!trackRef.current) return;
		const card = trackRef.current.children[idx];
		if (card) card.scrollIntoView({
			behavior: "smooth",
			block: "nearest",
			inline: "center"
		});
		setActiveIdx(idx);
	};
	const handleScroll = () => {
		if (!trackRef.current) return;
		const track = trackRef.current;
		const cardWidth = track.children[0]?.offsetWidth ?? 0;
		if (cardWidth === 0) return;
		const scrollLeft = track.scrollLeft;
		const idx = Math.round(scrollLeft / cardWidth);
		setActiveIdx(Math.max(0, Math.min(idx, steps.length - 1)));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "overview",
		className: "section-padding",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ambient-glow glow-purple",
			style: {
				top: "20%",
				left: "50%",
				transform: "translateX(-50%)"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container position-relative z-index-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "display-5 fw-bold mb-3 text-white",
						style: { fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif" },
						children: ["Enterprise Scope, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-warning",
							children: "Industry Precision"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lead fw-semibold mx-auto max-w-3xl",
						style: {
							fontSize: "1.1rem",
							lineHeight: "1.6"
						},
						children: "ConstructionERP is a full-stack platform engineered to align field execution with head-office supervision. We coordinate every stage of your operations in a secure session-locked database."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "row g-4 justify-content-center mt-4 d-none d-md-flex",
					children: steps.map((step, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-12 col-md-6 col-lg-4 col-xl-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "glass-card p-4 h-100 d-flex flex-column justify-content-between position-relative overflow-hidden",
							style: {
								backgroundImage: `url(${step.image})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
								backgroundRepeat: "no-repeat"
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "position-relative z-index-1 d-flex flex-column justify-content-between h-100",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "d-flex align-items-center justify-content-between mb-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "p-3 bg-dark bg-opacity-40 rounded border border-secondary d-flex align-items-center justify-content-center",
											style: {
												width: "48px",
												height: "48px"
											},
											children: step.icon
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-slate-400 small font-monospace fw-bold",
											style: { opacity: .8 },
											children: ["0", idx + 1]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "fw-bold mb-2 text-white",
										style: {
											fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif",
											fontSize: "clamp(1.1rem, 1.25vw, 1.25rem)",
											fontWeight: 700,
											lineHeight: 1.2,
											letterSpacing: "-0.01em",
											textShadow: "0 1px 3px rgba(0, 0, 0, 0.85)"
										},
										children: step.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mb-4",
										style: {
											color: "#E2E8F0",
											fontSize: "clamp(0.825rem, 0.95vw, 0.875rem)",
											fontWeight: 400,
											lineHeight: 1.45,
											textShadow: "0 1px 2px rgba(0, 0, 0, 0.85)"
										},
										children: step.desc
									})
								] }), idx < steps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "d-none d-xl-flex justify-content-end text-slate-400",
									style: {
										marginTop: "-10px",
										opacity: .5
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })
								})]
							})
						})
					}, idx))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "overview-mobile-carousel d-md-none mt-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "overview-carousel-btn overview-carousel-btn--prev",
							onClick: () => scrollToCard(Math.max(0, activeIdx - 1)),
							"aria-label": "Previous card",
							children: "‹"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overview-carousel-track",
							ref: trackRef,
							onScroll: handleScroll,
							children: steps.map((step, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overview-carousel-slide",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "glass-card p-4 h-100 d-flex flex-column justify-content-between position-relative overflow-hidden",
									style: {
										backgroundImage: `url(${step.image})`,
										backgroundSize: "cover",
										backgroundPosition: "center",
										backgroundRepeat: "no-repeat"
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "position-relative z-index-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "d-flex align-items-center justify-content-between mb-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "p-3 bg-dark bg-opacity-40 rounded border border-secondary d-flex align-items-center justify-content-center",
													style: {
														width: "48px",
														height: "48px"
													},
													children: step.icon
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-slate-400 small font-monospace fw-bold",
													style: { opacity: .8 },
													children: ["0", idx + 1]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "fw-bold mb-2 text-white",
												style: {
													fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif",
													fontSize: "clamp(1.1rem, 1.25vw, 1.25rem)",
													fontWeight: 700,
													lineHeight: 1.2,
													letterSpacing: "-0.01em",
													textShadow: "0 1px 3px rgba(0, 0, 0, 0.85)"
												},
												children: step.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mb-4",
												style: {
													color: "#E2E8F0",
													fontSize: "clamp(0.825rem, 0.95vw, 0.875rem)",
													fontWeight: 400,
													lineHeight: 1.45,
													textShadow: "0 1px 2px rgba(0, 0, 0, 0.85)"
												},
												children: step.desc
											})
										]
									})
								})
							}, idx))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "overview-carousel-btn overview-carousel-btn--next",
							onClick: () => scrollToCard(Math.min(steps.length - 1, activeIdx + 1)),
							"aria-label": "Next card",
							children: "›"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overview-carousel-dots",
							children: steps.map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: `overview-carousel-dot${activeIdx === idx ? " active" : ""}`,
								onClick: () => scrollToCard(idx),
								"aria-label": `Go to card ${idx + 1}`
							}, idx))
						})
					]
				})
			]
		})]
	});
}
function Lifecycle() {
	const lifecycleSteps = [
		{
			title: "Project Creation",
			desc: "Initialize location, budget limits and configurations"
		},
		{
			title: "BOQ Estimation",
			desc: "Define required materials, quantities, and baseline costs"
		},
		{
			title: "Material Request",
			desc: "Raised from site against allocated BOQ parameters"
		},
		{
			title: "Purchase Order",
			desc: "Authorized PO sent directly to vendor with tax rules"
		},
		{
			title: "Material Receipt",
			desc: "Verify incoming physical quantities at store/site"
		},
		{
			title: "Inventory Stock",
			desc: "Automatic updates of stock quantities and reorder alarms"
		},
		{
			title: "Site Consumption",
			desc: "Log materials consumed during day-to-day work"
		},
		{
			title: "Subcontractor Work",
			desc: "Issue formal work orders defining milestones"
		},
		{
			title: "Measurements",
			desc: "Log completed tasks with joint measurement sheets"
		},
		{
			title: "Bills",
			desc: "Compile approved measurements into vendor payments"
		},
		{
			title: "Project Costs",
			desc: "Aggregate material receipts + subcontractor bills"
		},
		{
			title: "Reports",
			desc: "BOQ variance reports, PO audits and cost margins"
		}
	];
	const trackRef = (0, import_react.useRef)(null);
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(0);
	const [canScrollLeft, setCanScrollLeft] = (0, import_react.useState)(false);
	const [canScrollRight, setCanScrollRight] = (0, import_react.useState)(true);
	const totalCards = lifecycleSteps.length;
	const updateScrollState = (0, import_react.useCallback)(() => {
		const el = trackRef.current;
		if (!el) return;
		setCanScrollLeft(el.scrollLeft > 4);
		setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
		const cards = el.querySelectorAll(".lifecycle-card-snap");
		if (!cards.length) return;
		let closestIdx = 0;
		let closestDist = Infinity;
		const center = el.scrollLeft + el.clientWidth / 2;
		cards.forEach((card, i) => {
			const cardCenter = card.offsetLeft + card.offsetWidth / 2;
			const dist = Math.abs(cardCenter - center);
			if (dist < closestDist) {
				closestDist = dist;
				closestIdx = i;
			}
		});
		setActiveIndex(closestIdx);
	}, []);
	(0, import_react.useEffect)(() => {
		const el = trackRef.current;
		if (!el) return;
		updateScrollState();
		el.addEventListener("scroll", updateScrollState, { passive: true });
		return () => el.removeEventListener("scroll", updateScrollState);
	}, [updateScrollState]);
	const scrollToCard = (idx) => {
		const el = trackRef.current;
		if (!el) return;
		const card = el.querySelectorAll(".lifecycle-card-snap")[idx];
		if (!card) return;
		const targetScrollLeft = card.offsetLeft - (el.clientWidth / 2 - card.offsetWidth / 2);
		el.scrollTo({
			left: Math.max(0, targetScrollLeft),
			behavior: "smooth"
		});
	};
	const scrollPrev = () => {
		const newIdx = Math.max(0, activeIndex - 1);
		scrollToCard(newIdx);
	};
	const scrollNext = () => {
		const newIdx = Math.min(totalCards - 1, activeIndex + 1);
		scrollToCard(newIdx);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "lifecycle",
		className: "section-padding lifecycle-carousel-section",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ambient-glow glow-blue",
			style: {
				bottom: "10%",
				left: "5%"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container position-relative z-index-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "erp-section-badge mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							size: 14,
							className: "text-warning"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-warning fw-semibold small text-uppercase",
							style: { letterSpacing: "0.05em" },
							children: "End-to-End Traceability"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "display-5 fw-bold mb-3",
						style: { fontFamily: "'Outfit', sans-serif" },
						children: ["Connected ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-warning",
							children: "Construction Lifecycle"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lead fw-bold mx-auto max-w-3xl",
						style: { fontSize: "1.1rem" },
						children: "See how data flows seamlessly across departments, ensuring complete audit trails from the first estimate to the final financial statements."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "row g-4 justify-content-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "col-12 col-xl-11",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-card p-4 p-md-5 lifecycle-glass-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: `lifecycle-nav-btn lifecycle-nav-left${canScrollLeft ? "" : " lifecycle-nav-hidden"}`,
								onClick: scrollPrev,
								"aria-label": "Previous lifecycle step",
								disabled: !canScrollLeft,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 18 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: `lifecycle-nav-btn lifecycle-nav-right${canScrollRight ? "" : " lifecycle-nav-hidden"}`,
								onClick: scrollNext,
								"aria-label": "Next lifecycle step",
								disabled: !canScrollRight,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 18 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "row g-4 lifecycle-carousel-track",
								ref: trackRef,
								role: "region",
								"aria-label": "Construction lifecycle steps",
								children: lifecycleSteps.map((step, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-12 col-md-6 col-lg-4 col-xl-3 lifecycle-card-snap",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `p-3 h-100 rounded bg-dark bg-opacity-40 border border-secondary position-relative hover:shadow-[0_0_15px_rgba(249,115,22,0.15)] transition lifecycle-card-inner${activeIndex === idx ? " lifecycle-card-active" : ""}`,
										style: { border: "1px solid rgba(255,255,255,0.06)" },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "d-flex align-items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-warning mt-1 flex-shrink-0",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { size: 18 })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "small text-slate-500 font-monospace mb-1",
													style: { fontSize: "0.75rem" },
													children: ["STEP ", idx + 1]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
													className: "fw-bold mb-2 text-white",
													style: { fontSize: "0.95rem" },
													children: step.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-slate-400 small m-0",
													style: {
														fontSize: "0.8rem",
														lineHeight: "1.45"
													},
													children: step.desc
												})
											] })]
										}), idx < lifecycleSteps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "position-absolute d-none d-xl-block",
											style: {
												top: "50%",
												right: "-12px",
												transform: "translateY(-50%)",
												zIndex: 10
											},
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
												size: 18,
												className: "text-secondary"
											})
										})]
									})
								}, idx))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "lifecycle-indicators",
								role: "tablist",
								"aria-label": "Lifecycle step navigation",
								children: lifecycleSteps.map((step, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: `lifecycle-dot${activeIndex === idx ? " lifecycle-dot-active" : ""}`,
									onClick: () => scrollToCard(idx),
									role: "tab",
									"aria-selected": activeIndex === idx,
									"aria-label": `Go to step ${idx + 1}: ${step.title}`
								}, idx))
							})
						]
					})
				})
			})]
		})]
	});
}
function Modules() {
	const modulesData = [
		{
			title: "Authentication & RBAC",
			desc: "Secure session authorization integrated with roles and permission guards.",
			features: [
				"Django Session Auth",
				"hasPermission() Context Helper",
				"Route Guards & Redirects"
			],
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, {
				className: "text-warning",
				size: 24
			})
		},
		{
			title: "Work Center",
			desc: "Role-specific operations hub and landing screen with actions and KPIs.",
			features: [
				"Project Quick Selector",
				"Attention Items Tracker",
				"Recent Activity Log Feed"
			],
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, {
				className: "text-info",
				size: 24
			})
		},
		{
			title: "Project Management",
			desc: "Complete project record lifecycle including codes, timelines, budgets, and status tags.",
			features: [
				"Filter & Search Queries",
				"Pagination Controls",
				"Detailed Status Badges"
			],
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, {
				className: "text-primary",
				size: 24
			})
		},
		{
			title: "Bill of Quantities (BOQ)",
			desc: "Linked specification baseline mapping materials, planned quantities, and units.",
			features: [
				"Estimation Allocation",
				"Unit Cost Breakdowns",
				"Material Demands Log"
			],
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clipboard, {
				className: "text-warning",
				size: 24
			})
		},
		{
			title: "Procurement Pipeline",
			desc: "Integrated pipeline connecting requests to purchase orders and receipts.",
			features: [
				"Material Requests Approval",
				"PO Vendor Tax Logs",
				"Partial Receipt Verification"
			],
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, {
				className: "text-info",
				size: 24
			})
		},
		{
			title: "Inventory & Stock",
			desc: "Maintains catalog catalog items, stock limits, and records site consumption.",
			features: [
				"Project Stock summaries",
				"Reorder Alerts",
				"Consumption Variance Logs"
			],
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, {
				className: "text-success",
				size: 24
			})
		},
		{
			title: "Subcontractors App",
			desc: "Subcontractor registry, milestone orders, physical measurements, and payment bills.",
			features: [
				"Work Order Scope Logs",
				"Joint Measurement Approvals",
				"Billing Status Progression"
			],
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UsersRound, {
				className: "text-light",
				size: 24
			})
		},
		{
			title: "Finance Cost Controls",
			desc: "Calculates real-time commitments (POs) against actual spend records.",
			features: [
				"Committed Cost Equation",
				"Actual Spend Log",
				"Variance Analytics"
			],
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndianRupee, {
				className: "text-danger",
				size: 24
			})
		},
		{
			title: "Interactive Reports",
			desc: "Generates detailed BOQ utilization, PO status matrices, and cost charts.",
			features: [
				"BOQ Consumption %",
				"Vendor PO Audit Values",
				"₹ formatting representation"
			],
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, {
				className: "text-success",
				size: 24
			})
		}
	];
	const trackRef = (0, import_react.useRef)(null);
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(0);
	const [canScrollLeft, setCanScrollLeft] = (0, import_react.useState)(false);
	const [canScrollRight, setCanScrollRight] = (0, import_react.useState)(true);
	const totalCards = modulesData.length;
	const updateScrollState = (0, import_react.useCallback)(() => {
		const el = trackRef.current;
		if (!el) return;
		setCanScrollLeft(el.scrollLeft > 4);
		setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
		const cards = el.querySelectorAll(".modules-card-snap");
		let closestIdx = 0;
		let closestDist = Infinity;
		const center = el.scrollLeft + el.clientWidth / 2;
		cards.forEach((card, i) => {
			const cardCenter = card.offsetLeft + card.offsetWidth / 2;
			const dist = Math.abs(cardCenter - center);
			if (dist < closestDist) {
				closestDist = dist;
				closestIdx = i;
			}
		});
		setActiveIndex(closestIdx);
	}, []);
	(0, import_react.useEffect)(() => {
		const el = trackRef.current;
		if (!el) return;
		updateScrollState();
		el.addEventListener("scroll", updateScrollState, { passive: true });
		return () => el.removeEventListener("scroll", updateScrollState);
	}, [updateScrollState]);
	const scrollToCard = (idx) => {
		const el = trackRef.current;
		if (!el) return;
		const card = el.querySelectorAll(".modules-card-snap")[idx];
		if (!card) return;
		const targetScrollLeft = card.offsetLeft - (el.clientWidth / 2 - card.offsetWidth / 2);
		el.scrollTo({
			left: Math.max(0, targetScrollLeft),
			behavior: "smooth"
		});
	};
	const scrollPrev = () => {
		const newIdx = Math.max(0, activeIndex - 1);
		scrollToCard(newIdx);
	};
	const scrollNext = () => {
		const newIdx = Math.min(totalCards - 1, activeIndex + 1);
		scrollToCard(newIdx);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "modules",
		className: "section-padding modules-carousel-section",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ambient-glow glow-orange",
				style: {
					top: "10%",
					right: "5%"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container position-relative z-index-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "display-5 fw-bold mb-3",
						style: { fontFamily: "'Outfit', sans-serif" },
						children: ["Core ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "gradient-text",
							children: "ERP Modules"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lead fw-semibold mx-auto max-w-3xl",
						style: { fontSize: "1.1rem" },
						children: "A comprehensive structure of modules aligned with ConstructionERP's Django backend architecture."
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "modules-carousel-outer",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: `modules-nav-btn modules-nav-left${canScrollLeft ? "" : " modules-nav-hidden"}`,
						onClick: scrollPrev,
						"aria-label": "Previous module",
						disabled: !canScrollLeft,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 20 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "modules-carousel-track",
						ref: trackRef,
						role: "region",
						"aria-label": "Core ERP Modules carousel",
						children: modulesData.map((mod, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "modules-card-snap",
							role: "group",
							"aria-label": `Module ${idx + 1} of ${totalCards}: ${mod.title}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `glass-card p-4 h-100 d-flex flex-column justify-content-between modules-card-inner${activeIndex === idx ? " modules-card-active" : ""}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "d-flex align-items-center justify-content-between mb-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "p-3 bg-dark bg-opacity-40 rounded border border-secondary d-flex align-items-center justify-content-center",
											style: {
												width: "48px",
												height: "48px"
											},
											children: mod.icon
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "badge bg-dark border border-secondary text-slate-400 font-monospace",
											style: {
												fontSize: "0.65rem",
												padding: "3px 8px"
											},
											children: ["/api/v1/module-0", idx + 1]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "fw-bold mb-3 text-white",
										style: { fontSize: "1.25rem" },
										children: mod.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-slate-400 small mb-4",
										style: {
											fontSize: "0.825rem",
											lineHeight: "1.5"
										},
										children: mod.desc
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "list-unstyled p-0 m-0 border-top border-secondary pt-3",
									children: mod.features.map((feat, fidx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "d-flex align-items-center gap-2 mb-2 text-slate-300 small",
										style: { fontSize: "0.8rem" },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "bg-warning rounded-circle",
											style: {
												width: "4px",
												height: "4px",
												opacity: .8,
												flexShrink: 0
											}
										}), feat]
									}, fidx))
								}) })]
							})
						}, idx))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: `modules-nav-btn modules-nav-right${canScrollRight ? "" : " modules-nav-hidden"}`,
						onClick: scrollNext,
						"aria-label": "Next module",
						disabled: !canScrollRight,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 20 })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "modules-indicators",
				role: "tablist",
				"aria-label": "Module navigation",
				children: modulesData.map((mod, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: `modules-dot${activeIndex === idx ? " modules-dot-active" : ""}`,
					onClick: () => scrollToCard(idx),
					role: "tab",
					"aria-selected": activeIndex === idx,
					"aria-label": `Go to module ${idx + 1}: ${mod.title}`
				}, idx))
			})
		]
	});
}
function ProblemSolutionSection() {
	const problems = [
		{
			id: "p-01",
			number: "01",
			title: "Scattered Project Information",
			description: "Project details, BOQ, milestones and progress information can become difficult to manage when they are maintained across disconnected systems."
		},
		{
			id: "p-02",
			number: "02",
			title: "Manual Material Tracking",
			description: "Tracking requested, approved, received, issued and consumed materials manually can lead to visibility gaps and avoidable errors."
		},
		{
			id: "p-03",
			number: "03",
			title: "Disconnected Procurement",
			description: "Material requests, purchase orders and receipts can become difficult to follow when procurement activities are not connected."
		},
		{
			id: "p-04",
			number: "04",
			title: "Limited Stock Visibility",
			description: "Teams may struggle to understand project-wise material availability, usage and remaining stock without centralized inventory tracking."
		},
		{
			id: "p-05",
			number: "05",
			title: "Complex Site & Contractor Management",
			description: "Managing site consumption, work orders and contractor activities across projects can become difficult without structured workflows."
		},
		{
			id: "p-06",
			number: "06",
			title: "Limited Project Cost Visibility",
			description: "Project teams need better visibility into operational and project-related costs to support informed decisions."
		}
	];
	const solutions = [
		{
			id: "s-01",
			number: "01",
			title: "Centralized Project Management",
			description: "Manage project information, milestones, BOQ and engineering progress through a structured project workflow.",
			badge: "Centralized"
		},
		{
			id: "s-02",
			number: "02",
			title: "Connected Material Management",
			description: "Connect material requests, approvals, stock and site consumption within a unified material workflow.",
			badge: "Connected"
		},
		{
			id: "s-03",
			number: "03",
			title: "Integrated Procurement Workflow",
			description: "Connect material requests with purchase orders and material receipts for better procurement tracking.",
			badge: "Workflow-driven"
		},
		{
			id: "s-04",
			number: "04",
			title: "Project-wise Stock Visibility",
			description: "Track available, issued, consumed and remaining material quantities with centralized inventory workflows.",
			badge: "Project-wise"
		},
		{
			id: "s-05",
			number: "05",
			title: "Structured Site & Contractor Operations",
			description: "Manage site consumption, work orders and contractor-related activities through organized operational workflows.",
			badge: "Role-based"
		},
		{
			id: "s-06",
			number: "06",
			title: "Project Cost Management",
			description: "Bring project-related costing information into a structured workflow for better financial visibility.",
			badge: "Unified"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "problem-solutions",
		className: "section-padding problem-solutions-section position-relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ambient-glow glow-blue problem-solutions-glow-left" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ambient-glow glow-green problem-solutions-glow-right" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container position-relative z-index-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-5 pb-lg-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "problem-solution-pill-badge mb-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "problem-solution-pill-text",
									children: "PROBLEM"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									size: 13,
									className: "problem-solution-pill-arrow"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "problem-solution-pill-text",
									children: "SOLUTION"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "display-5 fw-bold mb-3 text-white problem-solution-heading",
							children: [
								"Built to Solve the ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "gradient-text",
									children: "Challenges"
								}),
								" Behind",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "gradient-text",
									children: "Construction Operations"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lead fw-semibold mx-auto max-w-3xl text-slate-300 problem-solution-lead",
							children: "ConstructionERP brings projects, materials, procurement, site operations, contractors and costs together into one connected workflow — helping construction teams manage operations with greater clarity and control."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "row g-4 problem-solutions-grid",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-12 col-lg-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "problem-solution-panel problem-panel h-100",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "problem-solution-col-header pb-3 mb-2 d-flex align-items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "problem-solution-col-icon-circle problem-icon-glow",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, {
										size: 20,
										strokeWidth: 2
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "h4 fw-bold text-white mb-0 problem-solution-col-title",
									children: "Problems Holding Construction Teams Back"
								}) })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "problem-solution-list",
								children: problems.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `problem-solution-item problem-item ${idx !== problems.length - 1 ? "problem-solution-item-divider" : ""}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "d-flex align-items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "problem-solution-item-icon problem-icon-circle flex-shrink-0 mt-1",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, {
												size: 17,
												strokeWidth: 2
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex-grow-1 min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "d-flex align-items-center justify-content-between mb-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "problem-solution-item-title mb-0 text-white",
													children: item.title
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "problem-solution-item-num font-monospace small",
													children: item.number
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "problem-solution-item-desc mb-0 text-slate-400",
												children: item.description
											})]
										})]
									})
								}, item.id))
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-12 col-lg-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "problem-solution-panel solution-panel h-100",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "problem-solution-col-header pb-3 mb-2 d-flex align-items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "problem-solution-col-icon-circle solution-icon-glow",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
										size: 20,
										strokeWidth: 2
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "h4 fw-bold text-white mb-0 problem-solution-col-title",
									children: "How ConstructionERP Solves Them"
								}) })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "problem-solution-list",
								children: solutions.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `problem-solution-item solution-item ${idx !== solutions.length - 1 ? "problem-solution-item-divider" : ""}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "d-flex align-items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "problem-solution-item-icon solution-icon-circle flex-shrink-0 mt-1",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
												size: 17,
												strokeWidth: 2
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex-grow-1 min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "d-flex flex-wrap align-items-center justify-content-between gap-2 mb-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "problem-solution-item-title mb-0 text-white",
													children: item.title
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "problem-solution-capability-badge",
													children: item.badge
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "problem-solution-item-desc mb-0 text-slate-400",
												children: item.description
											})]
										})]
									})
								}, item.id))
							})]
						})
					})]
				})]
			})
		]
	});
}
function ProjectManagement() {
	const sampleProjects = [
		{
			code: "PRJ-2026-001",
			name: "Infinity Heights Block A",
			client: "Apex InfraCorp",
			location: "Sector 62, Noida",
			start: "2026-01-10",
			end: "2027-08-30",
			budget: "₹14,50,00,000",
			status: "Active"
		},
		{
			code: "PRJ-2026-002",
			name: "Metro Flyover Segment C",
			client: "Urban Transit Authority",
			location: "Pune Bypass",
			start: "2026-03-01",
			end: "2028-12-15",
			budget: "₹48,20,00,000",
			status: "Active"
		},
		{
			code: "PRJ-2026-003",
			name: "Eco-Park Sewerage Line",
			client: "Municipal Corporation",
			location: "Kolkata East",
			start: "2026-05-15",
			end: "2027-01-20",
			budget: "₹2,35,00,000",
			status: "Planned"
		},
		{
			code: "PRJ-2026-004",
			name: "Sunrise Corporate Towers",
			client: "Sunrise Developers",
			location: "Gachibowli, Hyderabad",
			start: "2025-08-01",
			end: "2027-04-10",
			budget: "₹22,80,00,000",
			status: "On Hold"
		}
	];
	const getStatusClass = (status) => {
		switch (status) {
			case "Planned": return "badge-planned";
			case "Active": return "badge-active";
			case "On Hold": return "badge-hold";
			case "Completed": return "badge-completed";
			default: return "badge-cancelled";
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "projects",
		className: "section-padding",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ambient-glow glow-blue",
			style: {
				top: "10%",
				left: "-10%"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container position-relative z-index-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "row align-items-center mb-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-12 col-lg-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "erp-section-badge mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderKanban, {
								size: 14,
								className: "text-warning"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-warning fw-bold small text-uppercase",
								style: { letterSpacing: "0.05em" },
								children: "Project Management"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-5 fw-bold gradient-text mb-3",
							children: "Organize and Audit Sites Efficiently"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lead fw-semibold",
							children: "Manage complete site information, budget allocations, schedules, and active statuses. Filter and search across projects with full CRUD capabilities."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "col-12 col-lg-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-card p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
							className: "fw-bold mb-3 text-white",
							children: "Supported Project Fields"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "row g-2",
							children: [
								"Project Code",
								"Project Name",
								"Client Name",
								"Site Location",
								"Start/End Dates",
								"Estimated Budget",
								"Workflow Status"
							].map((field, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-6 col-sm-4 col-md-3 col-lg-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "p-2 bg-dark rounded border border-secondary text-center small text-slate-300 erp-ui-text",
									children: field
								})
							}, idx))
						})]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "row",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "col-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-card p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
									className: "fw-bold m-0 text-gradient-orange-blue erp-ui-text",
									children: "Projects Directory"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "d-flex flex-wrap gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "position-relative",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
												className: "position-absolute text-slate-400",
												size: 16,
												style: {
													left: "12px",
													top: "50%",
													transform: "translateY(-50%)"
												}
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												placeholder: "Search code, name...",
												className: "form-control bg-dark border-secondary text-white erp-ui-text",
												style: {
													paddingLeft: "36px",
													fontSize: "0.85rem",
													width: "220px",
													minHeight: "38px"
												},
												readOnly: true
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											className: "glass-button py-2 px-3 small d-flex align-items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { size: 14 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "small",
												children: "Filter"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											className: "glass-button glass-button-primary py-2 px-3 small d-flex align-items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 14 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "small",
												children: "New Project"
											})]
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "table-responsive",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "custom-table",
									style: { fontSize: "0.875rem" },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Code" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Project Name" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Client" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Location" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "text-end",
											children: "Budget"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "text-center",
											children: "Status"
										})
									] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: sampleProjects.map((p, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "text-warning fw-bold",
											children: p.code
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "text-white fw-semibold",
											children: p.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "text-slate-300",
											children: p.client
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "text-slate-400",
											children: p.location
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "text-end text-info fw-semibold",
											children: p.budget
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "text-center",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `badge-custom ${getStatusClass(p.status)}`,
												children: p.status
											})
										})
									] }, idx)) })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "d-flex align-items-center justify-content-between border-top border-secondary pt-3 mt-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "small text-slate-400",
									children: "Showing 1 to 4 of 24 projects"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "d-flex gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "glass-button py-1 px-3 small",
											disabled: true,
											children: "Prev"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "glass-button py-1 px-3 small active",
											style: { borderColor: "var(--accent-orange)" },
											children: "1"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "glass-button py-1 px-3 small",
											children: "2"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "glass-button py-1 px-3 small",
											children: "Next"
										})
									]
								})]
							})
						]
					})
				})
			})]
		})]
	});
}
function BOQSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "boq",
		className: "section-padding",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ambient-glow glow-purple",
			style: {
				bottom: "-10%",
				right: "-10%"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container position-relative z-index-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "row align-items-center mb-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-12 col-lg-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "erp-section-badge mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardCheck, {
								size: 14,
								className: "text-warning"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-warning fw-bold small text-uppercase",
								style: { letterSpacing: "0.05em" },
								children: "Estimation Matrix"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "display-5 fw-bold mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gradient-text",
								children: "Bill of Quantities"
							}), " (BOQ)"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lead fw-semibold",
							children: "The baseline for all material requests and cost controls. Every quantity ordered by project managers must reconcile against the approved BOQ line items, blocking random or unbudgeted purchases."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-card p-3 mt-4 bg-dark",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
								className: "fw-bold mb-3 text-warning",
								children: "BOQ Estimation Pipeline"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "d-flex flex-column gap-2 small erp-ui-text",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "d-flex align-items-center justify-content-between p-2 rounded bg-black",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "1. Active Project" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, {
											size: 14,
											className: "text-warning"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "d-flex align-items-center justify-content-between p-2 rounded bg-black",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "2. Core BOQ Document" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, {
											size: 14,
											className: "text-warning"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "d-flex align-items-center justify-content-between p-2 rounded bg-black",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "3. Line Items (Material + Quantity + Unit)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, {
											size: 14,
											className: "text-warning"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "d-flex align-items-center justify-content-between p-2 rounded bg-black",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "4. Downstream Site Material Requests" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-success small",
											children: "Authorized Limit"
										})]
									})
								]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "col-12 col-lg-7 mt-4 mt-lg-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-card p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "d-flex align-items-center justify-content-between border-bottom border-secondary pb-3 mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
									className: "fw-bold m-0 erp-ui-text text-white",
									children: "BOQ #BOQ-2026-INFIN"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "small text-slate-400",
									children: "Linked Project: Infinity Heights Block A"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "d-flex gap-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "glass-button py-1 px-3 small erp-ui-text",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { size: 12 }), " Export PDF"]
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "row g-3 mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-3 bg-dark rounded border border-secondary",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "small text-slate-400 erp-ui-text d-block mb-1",
											children: "Total BOQ Items"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "erp-ui-text fw-bold text-white fs-5",
											children: "48 Categories"
										})]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-3 bg-dark rounded border border-secondary",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "small text-slate-400 erp-ui-text d-block mb-1",
											children: "Est. Material Value"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "erp-ui-text fw-bold text-warning fs-5",
											children: "₹3,42,12,000"
										})]
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "table-responsive",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "custom-table",
									style: { fontSize: "0.875rem" },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Line ID" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Category" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Material Details" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "text-end",
											children: "Planned Qty"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Unit" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "text-end",
											children: "Est. Rate"
										})
									] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: [
										{
											itemCode: "BOQ-M-001",
											category: "Cement",
											material: "OPC 53 Grade Cement",
											plannedQty: "12,500",
											unit: "Bags",
											rate: "₹420",
											total: "₹52,50,000"
										},
										{
											itemCode: "BOQ-M-002",
											category: "Steel Rebar",
											material: "TMT Steel Fe 500D (12mm)",
											plannedQty: "85",
											unit: "MT",
											rate: "₹62,000",
											total: "₹52,70,000"
										},
										{
											itemCode: "BOQ-M-003",
											category: "Aggregates",
											material: "Coarse Aggregate 20mm",
											plannedQty: "4,200",
											unit: "Cu.m",
											rate: "₹1,850",
											total: "₹77,70,000"
										},
										{
											itemCode: "BOQ-M-004",
											category: "Bricks",
											material: "Fly Ash Clay Bricks",
											plannedQty: "1,50,000",
											unit: "Nos",
											rate: "₹8",
											total: "₹12,000"
										}
									].map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "text-slate-400",
											children: item.itemCode
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "text-info fw-semibold",
											children: item.category
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "text-white",
											children: item.material
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "text-end text-white",
											children: item.plannedQty
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "text-slate-400",
											children: item.unit
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "text-end text-warning",
											children: item.rate
										})
									] }, idx)) })]
								})
							})
						]
					})
				})]
			})
		})]
	});
}
var STEPS = [
	"request",
	"order",
	"receipt"
];
function ProcurementSection() {
	const [activeStep, setActiveStep] = (0, import_react.useState)("request");
	const [isPaused, setIsPaused] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (isPaused) return;
		const timer = setInterval(() => {
			setActiveStep((prevStep) => {
				return STEPS[(STEPS.indexOf(prevStep) + 1) % STEPS.length];
			});
		}, 3500);
		return () => clearInterval(timer);
	}, [isPaused]);
	const handleStepHover = (step) => {
		setActiveStep(step);
		setIsPaused(true);
	};
	const handleStepClick = (step) => {
		setActiveStep(step);
		setIsPaused(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "procurement",
		className: "procurement-section section-padding",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ambient-glow glow-blue",
			style: {
				top: "30%",
				left: "10%"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container position-relative z-index-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "erp-section-badge mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, {
								size: 14,
								className: "text-warning"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-warning fw-semibold small text-uppercase",
								style: { letterSpacing: "0.05em" },
								children: "Supply Chain Integration"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-5 fw-bold mb-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gradient-text",
								children: "Procurement Pipeline"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lead fw-semibold mx-auto max-w-3xl",
							children: "Streamline supply chains by connecting material requests from the field directly to purchase orders and goods received notes."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "row justify-content-center mb-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-12 col-md-10 col-lg-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "row g-2",
							onMouseEnter: () => setIsPaused(true),
							onMouseLeave: () => setIsPaused(false),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => handleStepClick("request"),
										onMouseEnter: () => handleStepHover("request"),
										className: `erp-pipeline-step d-flex flex-column align-items-center gap-2 w-100 ${activeStep === "request" ? "active" : ""}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
												size: 18,
												className: "step-icon"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "small",
												children: "1. Material Request"
											}),
											activeStep === "request" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "erp-pipeline-progress-bar",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `erp-pipeline-progress-fill ${isPaused ? "paused" : ""}` }, `progress-request-${isPaused}`)
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => handleStepClick("order"),
										onMouseEnter: () => handleStepHover("order"),
										className: `erp-pipeline-step d-flex flex-column align-items-center gap-2 w-100 ${activeStep === "order" ? "active" : ""}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCheckCorner, {
												size: 18,
												className: "step-icon"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "small",
												children: "2. Purchase Order"
											}),
											activeStep === "order" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "erp-pipeline-progress-bar",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `erp-pipeline-progress-fill ${isPaused ? "paused" : ""}` }, `progress-order-${isPaused}`)
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => handleStepClick("receipt"),
										onMouseEnter: () => handleStepHover("receipt"),
										className: `erp-pipeline-step d-flex flex-column align-items-center gap-2 w-100 ${activeStep === "receipt" ? "active" : ""}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageCheck, {
												size: 18,
												className: "step-icon"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "small",
												children: "3. Material Receipt"
											}),
											activeStep === "receipt" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "erp-pipeline-progress-bar",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `erp-pipeline-progress-fill ${isPaused ? "paused" : ""}` }, `progress-receipt-${isPaused}`)
											})
										]
									})
								})
							]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "row justify-content-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-12 col-xl-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "glass-card p-4 erp-pipeline-display-card",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "erp-pipeline-panel-fade",
								children: [
									activeStep === "request" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "d-flex align-items-center justify-content-between border-bottom border-secondary pb-3 mb-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
											className: "fw-bold m-0 erp-ui-text text-white",
											children: "Material Request: MR-2026-042"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "badge-custom badge-hold",
											children: "Pending Approval"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "row g-3 small erp-ui-text",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "col-12 col-md-6",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "p-3 bg-dark rounded border border-secondary",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-slate-400 mb-1",
														children: "Project"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-white fw-bold",
														children: "PRJ-2026-001 (Infinity Heights Block A)"
													})]
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "col-12 col-md-6",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "p-3 bg-dark rounded border border-secondary",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-slate-400 mb-1",
														children: "BOQ Reference Link"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-white fw-bold",
														children: "BOQ-M-001 (Cement OPC 53)"
													})]
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "col-6 col-md-3",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "p-3 bg-dark rounded border border-secondary",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-slate-400 mb-1",
														children: "Requested Qty"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-warning fw-bold",
														children: "800 Bags"
													})]
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "col-6 col-md-3",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "p-3 bg-dark rounded border border-secondary",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-slate-400 mb-1",
														children: "Unit"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-white",
														children: "Bags"
													})]
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "col-12 col-md-6",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "p-3 bg-dark rounded border border-secondary",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-slate-400 mb-1",
														children: "Remarks / Justification"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-white",
														children: "Required for third-floor slab concreting schedule."
													})]
												})
											})
										]
									})] }),
									activeStep === "order" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "d-flex align-items-center justify-content-between border-bottom border-secondary pb-3 mb-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
												className: "fw-bold m-0 erp-ui-text text-white",
												children: "Purchase Order: PO-2026-027"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "badge-custom badge-active",
												children: "Issued / Sent"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "row g-3 small erp-ui-text",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "col-12 col-md-4",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "p-3 bg-dark rounded border border-secondary",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "text-slate-400 mb-1",
																children: "Vendor Details"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "text-white fw-bold",
																children: "UltraMax Concrete Supplies"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "text-slate-400 small",
																children: "Mob: +91 98765 43210"
															})
														]
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "col-12 col-md-4",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "p-3 bg-dark rounded border border-secondary",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "text-slate-400 mb-1",
																children: "Dates"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["Order Date: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-white",
																children: "2026-08-12"
															})] }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["Exp Delivery: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-warning",
																children: "2026-08-25"
															})] })
														]
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "col-12 col-md-4",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "p-3 bg-dark rounded border border-secondary",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "text-slate-400 mb-1",
																children: "Taxation Rules"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "text-white",
																children: "GST @18% Included"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "text-slate-400",
																children: "Freight Paid by Vendor"
															})
														]
													})
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
											className: "fw-semibold mt-4 mb-3 erp-ui-text text-warning",
											children: "PO Line Items"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "table-responsive",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
												className: "custom-table",
												style: { fontSize: "0.875rem" },
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Material" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "text-end",
														children: "PO Qty"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Unit" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "text-end",
														children: "Unit Price"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "text-end",
														children: "Tax Value"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "text-end",
														children: "Net Payable"
													})
												] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "text-white",
														children: "OPC 53 Grade Cement"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "text-end text-white",
														children: "800"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "Bags" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "text-end text-warning",
														children: "₹420.00"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "text-end text-danger",
														children: "₹60,480.00"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "text-end text-info",
														children: "₹3,96,480.00"
													})
												] }) })]
											})
										})
									] }),
									activeStep === "receipt" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "d-flex align-items-center justify-content-between border-bottom border-secondary pb-3 mb-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
											className: "fw-bold m-0 erp-ui-text text-white",
											children: "Material Receipt Note: MRN-2026-015"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "badge-custom badge-completed",
											children: "Fully Logged"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "row g-3 small erp-ui-text",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "col-12 col-md-6",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "p-3 bg-dark rounded border border-secondary",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-slate-400 mb-1",
														children: "PO Link Reference"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-white fw-bold",
														children: "PO-2026-027 (UltraMax Concrete Supplies)"
													})]
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "col-12 col-md-6",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "p-3 bg-dark rounded border border-secondary",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "text-slate-400 mb-1",
															children: "Goods Receipt Status"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "text-success fw-bold",
															children: "800 Bags Received / 0 Bags Rejected"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "text-slate-400 small",
															children: "Automatic inventory stock count updated +1"
														})
													]
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "col-12",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "p-3 bg-dark rounded border border-secondary",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-slate-400 mb-2",
														children: "Gate Inspection Remarks"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-white",
														children: "Physical bag count verification completed by Store Manager. Bag batch verified for moisture damages. Stacked in Yard A."
													})]
												})
											})
										]
									})] })
								]
							}, activeStep)
						})
					})
				})
			]
		})]
	});
}
function InventorySection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "inventory",
		className: "section-padding",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ambient-glow glow-orange",
			style: {
				bottom: "10%",
				right: "10%"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container position-relative z-index-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "row align-items-center mb-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-12 col-lg-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "erp-section-badge mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, {
								size: 14,
								className: "text-warning"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-warning fw-bold small text-uppercase",
								style: { letterSpacing: "0.05em" },
								children: "Inventory Systems"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-5 fw-bold gradient-text mb-3",
							children: "Stock & Site Consumption"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lead fw-semibold mx-auto max-w-3xl",
							children: "Track the flow of materials in real-time. Record daily site consumption to monitor construction waste and variance patterns directly against the initial BOQ parameters."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "col-12 col-lg-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-card p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
							className: "fw-bold mb-3 text-success font-monospace",
							children: "Material Lifecycle Stages"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "row g-2 text-start font-monospace small",
							children: [
								"BOQ Plan Baseline",
								"Approved requests",
								"Purchase Orders",
								"Physical receipts",
								"Project Warehouse Stock",
								"Daily Site Consumption",
								"Consumed Quantities",
								"Remaining balances"
							].map((stage, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-12 col-sm-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-2 bg-dark rounded border border-secondary d-flex align-items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-success fw-bold",
										children: "✓"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-slate-300",
										children: stage
									})]
								})
							}, idx))
						})]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "row",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "col-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-card p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "d-flex align-items-center justify-content-between border-bottom border-secondary pb-3 mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
									className: "fw-bold m-0 font-monospace text-white",
									children: "Project-Level Stock Balances"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "small text-slate-400",
									children: "Project: Infinity Heights Block A"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "table-responsive",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "custom-table font-monospace",
									style: { fontSize: "0.85rem" },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Material Code" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Material Name" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "text-end",
											children: "BOQ Planned"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "text-end",
											children: "Receipts"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "text-end",
											children: "Site Consumed"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "text-end",
											children: "Current Stock"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Unit" })
									] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: [
										{
											code: "MAT-CEM-001",
											name: "OPC 53 Grade Cement",
											planned: "12,500",
											received: "8,400",
											consumed: "7,200",
											available: "1,200",
											unit: "Bags"
										},
										{
											code: "MAT-STE-002",
											name: "TMT Steel Fe 500D (12mm)",
											planned: "85",
											received: "60",
											consumed: "45",
											available: "15",
											unit: "MT"
										},
										{
											code: "MAT-AGG-003",
											name: "Coarse Aggregate 20mm",
											planned: "4,200",
											received: "3,100",
											consumed: "2,900",
											available: "200",
											unit: "Cu.m"
										}
									].map((stk, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "text-slate-400",
											children: stk.code
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "text-white fw-bold",
											children: stk.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "text-end text-slate-300",
											children: stk.planned
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "text-end text-info",
											children: stk.received
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "text-end text-danger",
											children: stk.consumed
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "text-end text-success fw-bold",
											children: stk.available
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "text-slate-400",
											children: stk.unit
										})
									] }, idx)) })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 p-3 bg-dark border border-warning rounded d-flex align-items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-warning mt-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { size: 16 })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "small text-warning fw-bold font-monospace",
									children: "Variance Alarm Mode Active"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-slate-400 small m-0",
									children: "If site-level consumption exceeds BOQ planned quantity guidelines, the system logs a high-priority variance alert and restricts subsequent material requests until reviewed by the Project Manager."
								})] })]
							})
						]
					})
				})
			})]
		})]
	});
}
var B3_default = "/assets/B3-Br7DeTjQ.png";
function SubcontractorSection() {
	const steps = [
		{
			name: "Register Partner",
			desc: "Add contractors, scope expertise, tax details, and status reviews",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, {
				size: 18,
				className: "text-warning"
			})
		},
		{
			name: "Work Orders",
			desc: "Define milestone specifications, schedules, and agreed rates",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileSpreadsheet, {
				size: 18,
				className: "text-info"
			})
		},
		{
			name: "Joint Measurements",
			desc: "Site engineers verify physical dimensions of completed tasks",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, {
				size: 18,
				className: "text-success"
			})
		},
		{
			name: "Approve & Bill",
			desc: "Approve measurements to generate billing invoices automatically",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
				size: 18,
				className: "text-purple"
			})
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "subcontractors",
		className: "section-padding overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ambient-glow glow-purple",
			style: {
				top: "20%",
				left: "5%"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container position-relative z-index-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "row align-items-start g-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-12 col-lg-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "erp-section-badge mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
								size: 14,
								className: "text-warning"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-warning fw-bold small text-uppercase",
								style: { letterSpacing: "0.05em" },
								children: "Contractor Control"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "display-5 fw-bold gradient-text mb-3",
							style: { fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif" },
							children: ["Subcontractor & ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-warning",
								children: "Partner Lifecycle"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lead fw-semibold text-slate-300 mb-4",
							style: {
								fontSize: "1.05rem",
								lineHeight: "1.6"
							},
							children: "Control third-party works by linking work orders, verified site dimensions, and subsequent invoice payouts."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-card p-3 p-md-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "d-flex flex-wrap align-items-center justify-content-between border-bottom border-secondary border-opacity-40 pb-3 mb-4 gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
										className: "fw-bold m-0 erp-ui-text text-white",
										children: "Subcontractor Billing Queue"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "small text-slate-400 erp-ui-text",
										children: "Project: Infinity Heights"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "subcontractor-table-wrapper",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
										className: "custom-table",
										style: { fontSize: "0.875rem" },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Bill ID" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Subcontractor" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Work Description" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Date" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "text-end",
												children: "Verified Qty"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "text-end",
												children: "Invoice Amt"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "text-center",
												children: "Status"
											})
										] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: [{
											id: "SUB-BILL-08",
											sub: "Precision Masonry Ltd",
											work: "Brickwork Block A",
											date: "2026-08-15",
											qty: "120 Cu.m",
											amt: "₹4,80,000",
											status: "Submitted"
										}, {
											id: "SUB-BILL-09",
											sub: "Star Electrics",
											work: "Conduit laying Block B",
											date: "2026-08-18",
											qty: "450 m",
											amt: "₹1,35,000",
											status: "Paid"
										}].map((b, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "text-warning fw-bold",
												children: b.id
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "text-white",
												children: b.sub
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "text-slate-300",
												children: b.work
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "text-slate-400",
												children: b.date
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "text-end text-info",
												children: b.qty
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "text-end text-success fw-semibold",
												children: b.amt
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "text-center",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `badge-custom ${b.status === "Paid" ? "badge-completed" : "badge-hold"}`,
													children: b.status
												})
											})
										] }, idx)) })]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 p-3 bg-dark bg-opacity-60 border border-secondary border-opacity-40 rounded-3 erp-ui-text small",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-slate-400 mb-1",
										children: "Audit Check:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-white",
										children: "Bills are generated directly from approved site measurement logs, matching initial rates. Over-billing is blocked by code limit guards."
									})]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-12 col-lg-5 pt-lg-4 pt-xl-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "subcontractor-image-wrapper mb-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: B3_default,
							alt: "Subcontractor & Partner Lifecycle",
							className: "subcontractor-image"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "row g-2 text-start erp-ui-text small",
						children: steps.map((st, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "col-12",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3 bg-dark bg-opacity-60 rounded-3 border border-secondary border-opacity-40 d-flex align-items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "p-2 bg-black bg-opacity-60 rounded-2 border border-secondary border-opacity-40 mt-1 flex-shrink-0",
									children: st.icon
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-white fw-bold",
									children: st.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-slate-400 text-xs mt-1",
									children: st.desc
								})] })]
							})
						}, idx))
					})]
				})]
			})
		})]
	});
}
function FinanceSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "finance",
		className: "section-padding",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ambient-glow glow-blue",
			style: {
				bottom: "10%",
				left: "40%"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container position-relative z-index-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "row align-items-center mb-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-12 col-lg-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "erp-section-badge mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndianRupee, {
								size: 14,
								className: "text-warning"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-warning fw-bold small text-uppercase",
								style: { letterSpacing: "0.05em" },
								children: "Finance & Costs"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-5 fw-bold gradient-text mb-3",
							children: "Real-Time Cost Control"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lead fw-semibold",
							children: "Audit committed obligations and actual cash outflows immediately. Stop waiting for month-end reports—track cost variances as site purchases occur."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "col-12 col-lg-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-card p-4 bg-dark",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "d-flex align-items-center gap-2 mb-3 border-bottom border-secondary pb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calculator, {
								size: 18,
								className: "text-danger"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
								className: "fw-bold m-0 font-monospace text-white",
								children: "Project Cost Ledger Equation"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-monospace small text-slate-300",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-2 bg-black rounded mb-2 border border-secondary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-slate-400 small",
									children: "Committed Cost (Future Liability)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-warning fw-bold mt-1",
									children: "Sum of All Raised Purchase Orders (PO Value)"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-2 bg-black rounded border border-secondary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-slate-400 small",
									children: "Actual Spend (Paid / Unpaid Liabilities)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-success fw-bold mt-1",
									children: "Material Receipts (MRNs) + Approved Subcontractor Bills"
								})]
							})]
						})]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "row justify-content-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "col-12 col-xl-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-card p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "d-flex align-items-center justify-content-between border-bottom border-secondary pb-3 mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
									className: "fw-bold m-0 font-monospace text-white",
									children: "Project Cost Audit Ledger"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "small text-slate-400 font-monospace text-success",
									children: "✓ fully reconciled"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "row g-4 text-start font-monospace",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "col-12 col-md-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3 bg-dark border border-secondary rounded",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-slate-400 small mb-1",
													children: "Total Estimated Budget"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "fw-bold text-white mb-2",
													children: "₹1,50,00,000"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "small text-slate-500",
													children: "BOQ reference limit"
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "col-12 col-md-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3 bg-dark border border-secondary rounded",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-slate-400 small mb-1",
													children: "Committed Cost (POs Raised)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "fw-bold text-warning mb-2",
													children: "₹96,48,000"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "small text-slate-500",
													children: "64.3% of total budget"
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "col-12 col-md-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3 bg-dark border border-secondary rounded",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-slate-400 small mb-1",
													children: "Actual Spend (Receipts + Bills)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "fw-bold text-success mb-2",
													children: "₹54,15,000"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "small text-slate-500",
													children: "Reconciled material + labor"
												})
											]
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "d-flex justify-content-between small font-monospace text-slate-400 mb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Usage relative to plan" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-white",
										children: "64.3% committed"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "progress bg-secondary",
									style: { height: "8px" },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "progress-bar bg-warning",
										role: "progressbar",
										style: { width: "64.3%" },
										"aria-valuenow": "64.3",
										"aria-valuemin": "0",
										"aria-valuemax": "100"
									})
								})]
							})
						]
					})
				})
			})]
		})]
	});
}
function WorkCenterSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "workcenter",
		className: "section-padding",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ambient-glow glow-orange",
			style: {
				top: "-10%",
				left: "50%",
				transform: "translateX(-50%)"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container position-relative z-index-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "row align-items-center mb-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-12 col-lg-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "erp-section-badge mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, {
								size: 14,
								className: "text-warning"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-warning fw-bold small text-uppercase",
								style: { letterSpacing: "0.05em" },
								children: "Operational Hub"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-5 fw-bold gradient-text mb-3",
							children: "The Work Center Experience"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lead fw-semibold",
							children: "The first screen users land on after session verification. The Work Center aggregates role-based stats, quick-access routes, attention alerts, and recent updates under a single control deck."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "col-12 col-lg-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-card p-4 bg-dark",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "d-flex align-items-center gap-2 mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Folder, {
								size: 18,
								className: "text-warning"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "small text-white fw-semibold erp-ui-text",
								children: "Quick Dashboard Summary"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-slate-400 small mb-0",
							children: "Instead of jumping between nested modules, users see the exact indicators, approval lists, and records relevant to their session profile immediately."
						})]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "row justify-content-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "col-12 col-xl-11",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-card p-4 border border-secondary",
						style: { background: "#090d16" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "d-flex flex-wrap align-items-center justify-content-between border-bottom border-secondary pb-3 mb-4 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "d-flex align-items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
										className: "fw-bold m-0 erp-ui-text text-white",
										children: "Work Center"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "d-flex align-items-center bg-dark border border-secondary px-3 py-1 rounded",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "small text-slate-400 erp-ui-text me-2",
											children: "Selected Project:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											className: "bg-transparent border-0 text-warning erp-ui-text small",
											style: { outline: "none" },
											disabled: true,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Infinity Heights Block A" })
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "small font-monospace text-slate-400",
									children: ["Role: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-info fw-bold",
										children: "PROJECT_MANAGER"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "row g-3 mb-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "col-12 col-md-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3 bg-dark border border-secondary rounded erp-ui-text text-start erp-panel-ui",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "small text-slate-400 d-block mb-1",
												children: "Active Projects"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "fs-4 fw-bold text-white",
												children: "12 Projects"
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "col-12 col-md-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3 bg-dark border border-secondary rounded erp-ui-text text-start erp-panel-ui",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "small text-slate-400 d-block mb-1",
												children: "Pending Requests"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "fs-4 fw-bold text-warning",
												children: "8 Requests"
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "col-12 col-md-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3 bg-dark border border-secondary rounded erp-ui-text text-start erp-panel-ui",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "small text-slate-400 d-block mb-1",
												children: "Total Spent"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "fs-4 fw-bold text-success",
												children: "₹54,15,000"
											})]
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "row g-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "col-12 col-lg-7",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
											className: "fw-semibold erp-panel-label text-slate-400 mb-3 uppercase",
											children: "Quick Actions"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "row g-2 mb-4",
											children: [
												{
													title: "Raise Request",
													desc: "Create new Material Request against BOQ limit"
												},
												{
													title: "Approve Measurements",
													desc: "Verify and authorize physical site works"
												},
												{
													title: "Verify Goods Receipt",
													desc: "Log and inventory incoming truck shipments"
												}
											].map((act, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "col-12",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "p-3 rounded bg-dark border border-secondary d-flex align-items-center justify-content-between hover:shadow-[0_0_8px_rgba(255,255,255,0.05)] transition",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "small text-white fw-semibold erp-ui-text",
														children: act.title
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-slate-400 text-xs mt-1",
														children: act.desc
													})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
														size: 16,
														className: "text-slate-400"
													})]
												})
											}, idx))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
											className: "fw-semibold erp-panel-label text-slate-400 mb-3 uppercase",
											children: "Attention Required"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "d-flex flex-column gap-2",
											children: [{
												title: "Variance Limit Crossed",
												desc: "Coarse Aggregate consumption exceeded BOQ planned value by 12% at Infinity Heights Site.",
												severity: "High"
											}, {
												title: "Subcontractor Measurement Approval",
												desc: "Precision Masonry submitted brickwork measurement log for verification.",
												severity: "Medium"
											}].map((att, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3 rounded bg-dark border border-danger border-opacity-50 d-flex gap-3 text-start",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-danger mt-1",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { size: 18 })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "d-flex align-items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "small text-white fw-semibold erp-ui-text",
														children: att.title
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "badge-custom badge-cancelled text-xs",
														children: att.severity
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-slate-400 small m-0 mt-1",
													children: att.desc
												})] })]
											}, idx))
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "col-12 col-lg-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
											className: "fw-semibold erp-panel-label text-slate-400 mb-3 uppercase",
											children: "Recent Activity"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "p-3 rounded bg-dark border border-secondary text-start erp-ui-text small mb-4",
											children: [
												{
													text: "Store Manager logged Goods Receipt MRN-2026-015 for 800 bags cement.",
													time: "10 mins ago"
												},
												{
													text: "Finance Manager authorized payout for Subcontractor Bill SUB-BILL-09.",
													time: "1 hour ago"
												},
												{
													text: "Project Manager updated status of Metro Flyover Project to Active.",
													time: "4 hours ago"
												}
											].map((act, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mb-3 border-bottom border-secondary pb-2 last-border-none",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-slate-300 mb-1",
													children: act.text
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-slate-500 text-xs",
													children: act.time
												})]
											}, idx))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
											className: "fw-semibold erp-panel-label text-slate-400 mb-3 uppercase",
											children: "Quick Access Links"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "row g-2 text-start erp-ui-text small",
											children: [
												"Projects Directory",
												"Inventory Ledger",
												"Raise PO",
												"Measurements Board",
												"Finance Reports"
											].map((lnk, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "col-6",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "p-2 bg-dark rounded border border-secondary text-slate-300 text-center hover:text-white cursor-pointer transition",
													children: lnk
												})
											}, idx))
										})
									]
								})]
							})
						]
					})
				})
			})]
		})]
	});
}
function RBACSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "rbac",
		className: "section-padding",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ambient-glow glow-blue",
			style: {
				bottom: "-10%",
				left: "10%"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container position-relative z-index-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "erp-section-badge mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
							size: 14,
							className: "text-warning"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-warning fw-semibold small text-uppercase",
							style: { letterSpacing: "0.05em" },
							children: "Role Based Access Control"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "display-5 fw-bold mb-4 text-white",
						style: { fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif" },
						children: ["Granular ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-warning",
							children: "RBAC Security"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "row justify-content-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "col-12 col-lg-10 col-xl-9",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "lead fw-semibold  mx-auto",
								style: {
									fontSize: "1.1rem",
									lineHeight: "1.8"
								},
								children: "ConstructionERP provides granular Role-Based Access Control (RBAC) to ensure every team member gets only the permissions required for their responsibilities. Administrators can control access at both module and action levels, including view, create, edit, approve, and manage operations. This protects sensitive business workflows while maintaining secure, scalable access across projects, teams, and operational modules."
							})
						})
					})
				]
			})
		})]
	});
}
function WorkflowSection() {
	const steps = [
		{
			title: "Auth & Login",
			desc: "Secure user authentication & credentials",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { size: 18 }),
			color: "text-warning"
		},
		{
			title: "Permissions Map",
			desc: "Role-based access matrix & controls",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Key, { size: 18 }),
			color: "text-info"
		},
		{
			title: "Work Center Hub",
			desc: "Centralized task & module workspace",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { size: 18 }),
			color: "text-light"
		},
		{
			title: "Project Init",
			desc: "Site setup, budgets & configurations",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderClosed, { size: 18 }),
			color: "text-primary"
		},
		{
			title: "BOQ Estimation",
			desc: "Baseline cost estimation & quantities",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { size: 18 }),
			color: "text-warning"
		},
		{
			title: "Material Request",
			desc: "On-site material indent workflow",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { size: 18 }),
			color: "text-info"
		},
		{
			title: "Purchase Order",
			desc: "Authorized PO issuance to vendors",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { size: 18 }),
			color: "text-primary"
		},
		{
			title: "Receipt Note",
			desc: "Material inspection & store logs",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, { size: 18 }),
			color: "text-success"
		},
		{
			title: "Site Log",
			desc: "Daily execution & field updates",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, { size: 18 }),
			color: "text-success"
		},
		{
			title: "Contractor Order",
			desc: "Subcontractor work allocation",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { size: 18 }),
			color: "text-warning"
		},
		{
			title: "Measurements",
			desc: "Joint measurement sheet logging",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { size: 18 }),
			color: "text-info"
		},
		{
			title: "Subcontractor Bill",
			desc: "Milestone billing & verification",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DollarSign, { size: 18 }),
			color: "text-success"
		},
		{
			title: "Ledger Variance",
			desc: "Real-time financial audit & variance",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartNoAxesColumnIncreasing, { size: 18 }),
			color: "text-danger"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "workflow",
		className: "section-padding",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ambient-glow glow-blue",
			style: {
				top: "10%",
				right: "-10%"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container position-relative z-index-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-5 fw-bold gradient-text mb-3",
					style: { fontFamily: "'Outfit', sans-serif" },
					children: "Complete Application Workflow"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lead fw-semibold mx-auto max-w-3xl",
					style: { fontSize: "1.1rem" },
					children: "A continuous operational audit loop. Review how transactions propagate from field level entry to executive ledger dashboards."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "row g-3 g-md-4 justify-content-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "col-12 col-xl-11",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "glass-card p-4 p-md-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "row g-3 g-md-4 justify-content-center",
							children: steps.map((st, idx) => {
								const stepNum = String(idx + 1).padStart(2, "0");
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-12 col-sm-6 col-lg-4 col-xl-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "workflow-card",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "workflow-card-header",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "d-flex align-items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "workflow-step-badge",
														children: ["STEP ", stepNum]
													}), idx < steps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
														size: 12,
														className: "text-slate-500 opacity-60 d-none d-sm-inline"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: `workflow-icon-box ${st.color}`,
													children: st.icon
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
												className: "workflow-card-title",
												children: st.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "workflow-card-desc",
												children: st.desc
											})
										] })
									})
								}, idx);
							})
						})
					})
				})
			})]
		})]
	});
}
var B2_default = "/assets/B2-6cGqP3WF.png";
function ProductShowcase() {
	const [activeCard, setActiveCard] = (0, import_react.useState)(0);
	const cards = [
		{
			title: "Work Center",
			route: "/work-center",
			details: "Aggregates attention alerts, stats, quick access links and active project selectors."
		},
		{
			title: "Project Management",
			route: "/projects",
			details: "Displays client listings, budget baseline inputs, start/end schedules and status badges."
		},
		{
			title: "Bill of Quantities",
			route: "/boq",
			details: "Defines project estimation line items, raw material units and base contract rates."
		},
		{
			title: "Material Requests",
			route: "/procurement/requests",
			details: "Track site demands, draft requisitions, and multi-step approvals."
		},
		{
			title: "Purchase Orders",
			route: "/procurement/orders",
			details: "Audit vendor selections, tax settings, order schedules, and net costs."
		},
		{
			title: "Material Receipts",
			route: "/procurement/receipts",
			details: "Verify truck loads, log physical counts, and update warehouse stock counts."
		},
		{
			title: "Inventory Stock",
			route: "/inventory/stock",
			details: "Monitors remaining warehouse margins, reorder thresholds, and active balances."
		},
		{
			title: "Site Consumption",
			route: "/inventory/consumption",
			details: "Log raw materials utilized on site, mapping deviations against the BOQ."
		},
		{
			title: "Subcontractor Registry",
			route: "/subcontractors",
			details: "Coordinates company contact details, scope tags, and registry status."
		},
		{
			title: "Work Orders",
			route: "/subcontractors/work-orders",
			description: "Sets contractor rates, milestones and tasks."
		},
		{
			title: "Measurements log",
			route: "/subcontractors/measurements",
			details: "Approves physically measured milestone volumes completed by contractors."
		},
		{
			title: "Cost Ledgers",
			route: "/finance/costs",
			details: "Compares committed liabilities against actual cash spend."
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "showcase",
		className: "section-padding",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ambient-glow glow-blue",
			style: {
				top: "20%",
				left: "10%"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container position-relative z-index-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "erp-section-badge mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
								size: 14,
								className: "text-warning"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-warning fw-semibold small text-uppercase",
								style: { letterSpacing: "0.05em" },
								children: "Live Site Interface"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-5 fw-bold mb-3 text-white",
							style: { fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gradient-text",
								children: "Real-Time Site & Enterprise ERP Dashboard"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lead fw-semibold mx-auto max-w-3xl",
							style: {
								fontSize: "1.05rem",
								lineHeight: "1.6"
							},
							children: "Experience real-time site monitoring and enterprise resource management in one synchronized operational dashboard."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "row justify-content-center mb-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-12 col-xl-11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "banner-showcase-card p-3 p-md-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3 px-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "d-flex align-items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "banner-badge-tag-blue",
										children: "Live Field Operations"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-slate-300 small erp-ui-text d-none d-md-inline",
										children: "• Real-time Cost Variance & Progress Analytics"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "d-flex align-items-center gap-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "badge bg-success bg-opacity-20 text-success border border-success border-opacity-30 rounded-pill px-3 py-1 small",
										children: "● Connected to Live Database"
									})
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "position-relative overflow-hidden rounded-4 border border-secondary border-opacity-40",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: B2_default,
									alt: "Construction ERP Site Control Dashboard Overview",
									className: "banner-showcase-img"
								})
							})]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "row justify-content-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-12 col-xl-11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "glass-card p-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "row g-4 align-items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-12 col-lg-5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "d-flex flex-column gap-2",
										style: {
											maxHeight: "420px",
											overflowY: "auto",
											paddingRight: "8px"
										},
										children: cards.map((card, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => setActiveCard(idx),
											className: `p-3 text-start rounded border transition-all ${activeCard === idx ? "bg-warning bg-opacity-10 border-warning text-white" : "bg-dark bg-opacity-50 border-secondary text-slate-400 hover:text-white"}`,
											style: { outline: "none" },
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "erp-ui-text fw-semibold small mb-1",
												children: card.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs font-monospace text-slate-400",
												children: card.route
											})]
										}, idx))
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-12 col-lg-7",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "browser-mockup",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "browser-header",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "browser-dots",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "browser-dot bg-danger",
															style: {
																width: "8px",
																height: "8px"
															}
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "browser-dot bg-warning",
															style: {
																width: "8px",
																height: "8px"
															}
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "browser-dot bg-success",
															style: {
																width: "8px",
																height: "8px"
															}
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "browser-address",
													children: ["localhost:3000", cards[activeCard].route]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: "32px" } })
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-4",
											style: {
												minHeight: "340px",
												background: "#090d16"
											},
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "fw-bold text-warning mb-3",
													style: { fontFamily: "'Outfit', sans-serif" },
													children: cards[activeCard].title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-slate-300 mb-4 leading-relaxed",
													style: { fontSize: "0.9rem" },
													children: cards[activeCard].details || cards[activeCard].description
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "p-3 bg-dark bg-opacity-50 border border-secondary rounded font-monospace small",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-slate-400 mb-1",
														style: { fontSize: "0.75rem" },
														children: "React Route Path:"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "text-white text-break",
														style: { fontSize: "0.75rem" },
														children: ["src/pages", cards[activeCard].route === "/work-center" ? "/WorkCenter.jsx" : cards[activeCard].route === "/projects" ? "/Projects.jsx" : cards[activeCard].route === "/boq" ? "/BOQList.jsx" : cards[activeCard].route === "/procurement/requests" ? "/MaterialRequests.jsx" : cards[activeCard].route === "/procurement/orders" ? "/PurchaseOrders.jsx" : cards[activeCard].route === "/procurement/receipts" ? "/MaterialReceipts.jsx" : cards[activeCard].route === "/inventory/stock" ? "/Stock.jsx" : cards[activeCard].route === "/inventory/consumption" ? "/SiteConsumption.jsx" : cards[activeCard].route === "/subcontractors" ? "/subcontractors/SubcontractorList.jsx" : cards[activeCard].route === "/subcontractors/work-orders" ? "/subcontractors/SubcontractWorkOrders.jsx" : cards[activeCard].route === "/subcontractors/measurements" ? "/subcontractors/MeasurementApproval.jsx" : "/Costs.jsx"]
													})]
												})
											]
										})]
									})
								})]
							})
						})
					})
				})
			]
		})]
	});
}
function FAQSection() {
	const [openIdx, setOpenIdx] = (0, import_react.useState)(0);
	const faqs = [
		{
			question: "Who can use ConstructionERP?",
			answer: "ConstructionERP is designed for construction companies and project teams, including Project Managers, Site Engineers, Procurement Managers, Store Managers, Finance Managers, and Subcontractor Managers."
		},
		{
			question: "What modules are available in ConstructionERP?",
			answer: "The platform provides modules for Project Management, BOQ, Procurement, Inventory & Materials, Subcontractors, Finance, Work Center, and Reports, helping teams manage the complete project workflow in one place."
		},
		{
			question: "Can ConstructionERP manage multiple construction projects?",
			answer: "Yes. ConstructionERP can manage multiple projects while keeping project-specific information such as BOQ, procurement, inventory, consumption, costs, contractors, and reports organized separately."
		},
		{
			question: "How does ConstructionERP help with material management?",
			answer: "ConstructionERP connects material requests, purchase orders, material receipts, inventory stock, and site consumption, allowing teams to track material movement from procurement to actual project usage."
		},
		{
			question: "Can ConstructionERP manage subcontractor work orders?",
			answer: "Yes. The Subcontractors module allows authorized users to create and manage work orders, assign available stock materials, record work progress, and manage related billing workflows."
		},
		{
			question: "Does ConstructionERP provide project reports?",
			answer: "Yes. ConstructionERP provides project-related reports and consumption metrics to help management monitor project progress, material usage, costs, and operational performance."
		}
	];
	const toggleFAQ = (idx) => {
		setOpenIdx(openIdx === idx ? null : idx);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "faq",
		className: "section-padding",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ambient-glow glow-purple",
			style: {
				top: "30%",
				left: "50%",
				transform: "translateX(-50%)"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container position-relative z-index-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "erp-section-badge mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, {
							size: 14,
							className: "text-warning"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-warning fw-semibold small text-uppercase",
							style: { letterSpacing: "0.05em" },
							children: "FREQUENTLY ASKED QUESTIONS"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "display-5 fw-bold mb-3 text-white",
						style: { fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif" },
						children: ["Frequently Asked ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "gradient-text",
							children: "Questions"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lead fw-semibold mx-auto max-w-3xl text-slate-300",
						style: {
							fontSize: "1.1rem",
							lineHeight: "1.6"
						},
						children: "Quick answers to common questions about ConstructionERP."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto",
				style: { maxWidth: "800px" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "d-flex flex-column gap-3",
					children: faqs.map((faq, idx) => {
						const isOpen = openIdx === idx;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `glass-card overflow-hidden ${isOpen ? "border-warning border-opacity-40" : ""}`,
							style: {
								backgroundColor: isOpen ? "rgba(15, 23, 42, 0.75)" : "rgba(15, 23, 42, 0.45)",
								borderColor: isOpen ? "rgba(245, 158, 11, 0.35)" : "rgba(255, 255, 255, 0.08)",
								borderRadius: "14px",
								transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "w-100 p-4 text-start bg-transparent border-0 d-flex align-items-center justify-content-between gap-3 text-decoration-none",
								onClick: () => toggleFAQ(idx),
								"aria-expanded": isOpen,
								"aria-controls": `faq-answer-${idx}`,
								id: `faq-question-${idx}`,
								style: {
									cursor: "pointer",
									outline: "none"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `fw-semibold ${isOpen ? "text-warning" : "text-white"}`,
									style: {
										fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif",
										lineHeight: "1.4",
										fontSize: "clamp(1.025rem, 1.15vw, 1.15rem)"
									},
									children: faq.question
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 ${isOpen ? "bg-warning text-dark fw-bold" : "bg-dark bg-opacity-60 text-slate-300 border border-secondary border-opacity-40"}`,
									style: {
										width: "38px",
										height: "38px",
										transition: "all 0.25s ease"
									},
									children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
										size: 18,
										strokeWidth: 2.5
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
										size: 18,
										strokeWidth: 2.5
									})
								})]
							}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								id: `faq-answer-${idx}`,
								role: "region",
								"aria-labelledby": `faq-question-${idx}`,
								className: "px-4 pb-4 pt-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pt-3 border-top border-secondary border-opacity-20 text-slate-300",
									style: {
										fontSize: "0.975rem",
										lineHeight: "1.65"
									},
									children: faq.answer
								})
							})]
						}, idx);
					})
				})
			})]
		})]
	});
}
var logo1_default = "/assets/logo1-CahmPATB.png";
var logo2_default = "/assets/logo2--JzsJyw9.png";
var logo3_default = "/assets/logo3-DUDjdL2J.png";
var logo4_default = "/assets/logo4-CQgd4Y4P.png";
var logo5_default = "/assets/logo5-DF3qP0Yl.png";
var logo6_default = "/assets/logo6-DQs9QEHk.png";
var logo7_default = "/assets/logo7-B1GEkmwy.png";
var Marquee = typeof import_dist.default === "function" ? import_dist.default : import_dist.default?.default || import_dist.default;
var clientLogos = [
	{
		id: 1,
		image: logo1_default,
		alt: "ConstructionERP Client Logo 1"
	},
	{
		id: 2,
		image: logo2_default,
		alt: "ConstructionERP Client Logo 2"
	},
	{
		id: 3,
		image: logo3_default,
		alt: "ConstructionERP Client Logo 3"
	},
	{
		id: 4,
		image: logo4_default,
		alt: "ConstructionERP Client Logo 4"
	},
	{
		id: 5,
		image: logo5_default,
		alt: "ConstructionERP Client Logo 5"
	},
	{
		id: 6,
		image: logo6_default,
		alt: "ConstructionERP Client Logo 6"
	},
	{
		id: 7,
		image: logo7_default,
		alt: "ConstructionERP Client Logo 7"
	}
];
function ClientsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "clients",
		className: "section-padding position-relative clients-section",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ambient-glow glow-orange",
				style: {
					top: "15%",
					left: "5%"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ambient-glow glow-purple",
				style: {
					bottom: "15%",
					right: "5%"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container position-relative z-index-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-5 clients-header",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "erp-section-badge mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
								size: 14,
								className: "text-warning"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-warning fw-semibold small text-uppercase",
								style: { letterSpacing: "0.05em" },
								children: "ENTERPRISE TRUST"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "display-5 fw-bold text-white mb-3",
							children: [
								"Trusted by ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "gradient-text",
									children: "Leaders & Innovators"
								}),
								" Worldwide"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lead fw-semibold mx-auto max-w-3xl text-slate-300",
							children: "Powering top-tier construction enterprises, infrastructure firms, and commercial builders with automated workflow discipline and real-time site control."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "clients-marquee-container position-relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "marquee-fade-left" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "marquee-fade-right" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "clients-marquee-row mb-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {
							direction: "left",
							speed: 40,
							gradient: false,
							pauseOnHover: true,
							className: "clients-marquee",
							children: clientLogos.map((logo) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "client-logo-card",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: logo.image,
									alt: logo.alt,
									className: "client-logo-img",
									loading: "lazy"
								})
							}, `row1-${logo.id}`))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "clients-marquee-row",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {
							direction: "right",
							speed: 40,
							gradient: false,
							pauseOnHover: true,
							className: "clients-marquee",
							children: clientLogos.map((logo) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "client-logo-card",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: logo.image,
									alt: logo.alt,
									className: "client-logo-img",
									loading: "lazy"
								})
							}, `row2-${logo.id}`))
						})
					})
				]
			})
		]
	});
}
function TechnologyStack() {
	const techs = [
		{
			name: "HTML5",
			category: "Frontend Foundation",
			desc: "Semantic elements for robust document structures, accessibility, and SEO.",
			color: "rgba(227, 79, 38, 0.18)",
			borderColor: "rgba(227, 79, 38, 0.4)",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiHtml5, {
				size: 38,
				color: "#e34f26"
			})
		},
		{
			name: "Bootstrap 5",
			category: "CSS UI Layout",
			desc: "Responsive styling utilities, flex grid structure, and modular UI patterns.",
			color: "rgba(139, 92, 246, 0.18)",
			borderColor: "rgba(139, 92, 246, 0.4)",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiBootstrap, {
				size: 38,
				color: "#8b5cf6"
			})
		},
		{
			name: "React.js",
			category: "Frontend Logic",
			desc: "Dynamic state rendering, SPA routing, and reusable interface components.",
			color: "rgba(97, 218, 251, 0.18)",
			borderColor: "rgba(97, 218, 251, 0.4)",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiReact, {
				size: 38,
				color: "#61dafb"
			})
		},
		{
			name: "Python",
			category: "Backend Logic",
			desc: "Robust server scripts, computational logic, data mapping, and utility controllers.",
			color: "rgba(55, 118, 171, 0.18)",
			borderColor: "rgba(55, 118, 171, 0.4)",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiPython, {
				size: 38,
				color: "#3776ab"
			})
		},
		{
			name: "Django",
			category: "Backend Web Framework",
			desc: "B2B secure APIs, session auth context, object relational database filters (ORM), and strict RBAC guards.",
			color: "rgba(68, 183, 139, 0.18)",
			borderColor: "rgba(68, 183, 139, 0.4)",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiDjango, {
				size: 38,
				color: "#44b78b"
			})
		},
		{
			name: "PostgreSQL",
			category: "Database Management",
			desc: "Session-locked relational structure, index performance logs, transaction integrity, and audit tracking.",
			color: "rgba(65, 105, 225, 0.18)",
			borderColor: "rgba(65, 105, 225, 0.4)",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiPostgresql, {
				size: 38,
				color: "#4169e1"
			})
		}
	];
	const trackRef = (0, import_react.useRef)(null);
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(0);
	const [canScrollLeft, setCanScrollLeft] = (0, import_react.useState)(false);
	const [canScrollRight, setCanScrollRight] = (0, import_react.useState)(true);
	const totalCards = techs.length;
	const updateScrollState = (0, import_react.useCallback)(() => {
		const el = trackRef.current;
		if (!el) return;
		setCanScrollLeft(el.scrollLeft > 4);
		setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
		const cards = el.querySelectorAll(".techstack-card-snap");
		if (!cards.length) return;
		let closestIdx = 0;
		let closestDist = Infinity;
		const isMobile = window.innerWidth <= 767.98;
		const targetRefPoint = isMobile ? el.scrollLeft + 20 : el.scrollLeft + el.clientWidth / 2;
		cards.forEach((card, i) => {
			const cardRefPoint = isMobile ? card.offsetLeft : card.offsetLeft + card.offsetWidth / 2;
			const dist = Math.abs(cardRefPoint - targetRefPoint);
			if (dist < closestDist) {
				closestDist = dist;
				closestIdx = i;
			}
		});
		setActiveIndex(closestIdx);
	}, []);
	(0, import_react.useEffect)(() => {
		const el = trackRef.current;
		if (!el) return;
		updateScrollState();
		el.addEventListener("scroll", updateScrollState, { passive: true });
		return () => el.removeEventListener("scroll", updateScrollState);
	}, [updateScrollState]);
	const scrollToCard = (idx) => {
		const el = trackRef.current;
		if (!el) return;
		const card = el.querySelectorAll(".techstack-card-snap")[idx];
		if (!card) return;
		if (window.innerWidth <= 767.98) {
			const targetScrollLeft = card.offsetLeft - 20;
			el.scrollTo({
				left: Math.max(0, targetScrollLeft),
				behavior: "smooth"
			});
		} else card.scrollIntoView({
			behavior: "smooth",
			block: "nearest",
			inline: "center"
		});
		setActiveIndex(idx);
	};
	const scrollPrev = () => {
		const newIdx = Math.max(0, activeIndex - 1);
		scrollToCard(newIdx);
	};
	const scrollNext = () => {
		const newIdx = Math.min(totalCards - 1, activeIndex + 1);
		scrollToCard(newIdx);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "tech-stack",
		className: "section-padding position-relative overflow-hidden techstack-carousel-section",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ambient-glow glow-blue",
			style: {
				bottom: "10%",
				right: "5%"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container position-relative z-index-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "erp-section-badge mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, {
							size: 16,
							className: "text-warning"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-warning fw-bold small text-uppercase",
							style: { letterSpacing: "0.05em" },
							children: "Architecture"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-5 fw-bold mb-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "gradient-text",
							children: "Enterprise Technology Stack"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lead fw-semibold mx-auto max-w-3xl",
						children: "ConstructionERP utilizes a robust industry-standard tech stack. We combine React's logic layer with Django's secure database integrity rules."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "techstack-carousel-outer",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: `techstack-nav-btn techstack-nav-left${canScrollLeft ? "" : " techstack-nav-hidden"}`,
						onClick: scrollPrev,
						"aria-label": "Previous technology",
						disabled: !canScrollLeft,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 18 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: `techstack-nav-btn techstack-nav-right${canScrollRight ? "" : " techstack-nav-hidden"}`,
						onClick: scrollNext,
						"aria-label": "Next technology",
						disabled: !canScrollRight,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 18 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "row g-4 justify-content-center techstack-carousel-track",
						ref: trackRef,
						role: "region",
						"aria-label": "Enterprise Technology Stack cards",
						children: techs.map((tech, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "col-12 col-md-6 col-lg-4 techstack-card-snap",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `tech-card h-100 p-4 techstack-card-inner${activeIndex === idx ? " techstack-card-active" : ""}`,
								style: {
									border: `1px solid ${tech.borderColor}`,
									background: `linear-gradient(135deg, ${tech.color} 0%, rgba(9, 13, 22, 0.7) 100%)`
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "tech-icon-wrapper flex-shrink-0 me-3",
									style: {
										width: "60px",
										height: "60px",
										borderRadius: "14px",
										background: "rgba(15, 23, 42, 0.85)",
										border: `1px solid ${tech.borderColor}`,
										boxShadow: `0 6px 18px -4px ${tech.color}`
									},
									children: tech.icon
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-start",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "d-flex align-items-center gap-2 mb-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
												className: "fw-bold m-0 text-white",
												style: { fontSize: "1.05rem" },
												children: tech.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "badge bg-dark border border-secondary text-slate-300 font-monospace",
												style: {
													fontSize: "0.65rem",
													padding: "3px 8px"
												},
												children: idx < 3 ? "FRONTEND" : "BACKEND"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-info font-monospace d-block mb-1",
											style: { fontSize: "0.725rem" },
											children: tech.category
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-slate-300 m-0 small",
											style: {
												fontSize: "0.825rem",
												lineHeight: "1.45"
											},
											children: tech.desc
										})
									]
								})]
							})
						}, idx))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "techstack-indicators",
						role: "tablist",
						"aria-label": "Technology stack navigation",
						children: techs.map((tech, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: `techstack-dot${activeIndex === idx ? " techstack-dot-active" : ""}`,
							onClick: () => scrollToCard(idx),
							role: "tab",
							"aria-selected": activeIndex === idx,
							"aria-label": `Go to technology ${idx + 1}: ${tech.name}`
						}, idx))
					})
				]
			})]
		})]
	});
}
function Testimonials() {
	const testimonials = [
		{
			id: 1,
			name: "Rajesh Sharma",
			role: "Senior Project Director",
			company: "Apex Infrastructure Group",
			project: "Metro Line Extension Project",
			avatarInitials: "RS",
			avatarGradient: "linear-gradient(135deg, #f97316 0%, #ec4899 100%)",
			message: "ConstructionERP completely transformed how we track site material consumption and subcontractor billings. Having BOQ limits auto-checked before purchase orders are issued saved us from huge budget overruns.",
			rating: 5,
			highlightBadge: "Infrastructure"
		},
		{
			id: 2,
			name: "Sarah Jenkins",
			role: "VP of Operations",
			company: "Skyline Highrise Builders",
			project: "Commercial Tower Phase II",
			avatarInitials: "SJ",
			avatarGradient: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
			message: "The real-time sync between store managers at site and head office procurement is incredible. Daily work logs and goods receipts propagate instantly, making month-end audit reports completely painless.",
			rating: 5,
			highlightBadge: "Commercial Real Estate"
		},
		{
			id: 3,
			name: "Amit Patel",
			role: "Chief Procurement Officer",
			company: "Horizon Infra Works",
			project: "National Highway Expansion",
			avatarInitials: "AP",
			avatarGradient: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
			message: "Managing dozens of subcontractors with different measurement sheets used to take weeks. With ConstructionERP's automated workflow, payment certificates and cost reconciliations are processed seamlessly.",
			rating: 5,
			highlightBadge: "Civil & Roads"
		}
	];
	const trackRef = (0, import_react.useRef)(null);
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(0);
	const [canScrollLeft, setCanScrollLeft] = (0, import_react.useState)(false);
	const [canScrollRight, setCanScrollRight] = (0, import_react.useState)(true);
	const totalCards = testimonials.length;
	const updateScrollState = (0, import_react.useCallback)(() => {
		const el = trackRef.current;
		if (!el) return;
		setCanScrollLeft(el.scrollLeft > 4);
		setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
		const cards = el.querySelectorAll(".testimonial-card-snap");
		if (!cards.length) return;
		let closestIdx = 0;
		let closestDist = Infinity;
		const center = el.scrollLeft + el.clientWidth / 2;
		cards.forEach((card, i) => {
			const cardCenter = card.offsetLeft + card.offsetWidth / 2;
			const dist = Math.abs(cardCenter - center);
			if (dist < closestDist) {
				closestDist = dist;
				closestIdx = i;
			}
		});
		setActiveIndex(closestIdx);
	}, []);
	(0, import_react.useEffect)(() => {
		const el = trackRef.current;
		if (!el) return;
		updateScrollState();
		el.addEventListener("scroll", updateScrollState, { passive: true });
		return () => el.removeEventListener("scroll", updateScrollState);
	}, [updateScrollState]);
	const scrollToCard = (idx) => {
		const el = trackRef.current;
		if (!el) return;
		const card = el.querySelectorAll(".testimonial-card-snap")[idx];
		if (!card) return;
		const targetScrollLeft = card.offsetLeft - (el.clientWidth / 2 - card.offsetWidth / 2);
		el.scrollTo({
			left: Math.max(0, targetScrollLeft),
			behavior: "smooth"
		});
	};
	const scrollPrev = () => {
		const newIdx = Math.max(0, activeIndex - 1);
		scrollToCard(newIdx);
	};
	const scrollNext = () => {
		const newIdx = Math.min(totalCards - 1, activeIndex + 1);
		scrollToCard(newIdx);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "testimonials",
		className: "section-padding position-relative testimonials-carousel-section",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ambient-glow glow-orange",
				style: {
					top: "20%",
					right: "10%"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ambient-glow glow-purple",
				style: {
					bottom: "15%",
					left: "5%"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container position-relative z-index-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "erp-section-badge mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquareQuote, {
								size: 14,
								className: "text-warning"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-warning fw-semibold small text-uppercase",
								style: { letterSpacing: "0.05em" },
								children: "Customer Feedback"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "display-5 fw-bold text-white mb-3",
							children: ["Trusted by ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-warning",
								children: "Construction Leaders"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lead fw-semibold mx-auto max-w-3xl",
							children: "Hear from teams using ConstructionERP to simplify project operations, enforce BOQ discipline, and streamline day-to-day construction management."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "testimonials-carousel-outer",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: `testimonials-nav-btn testimonials-nav-left${canScrollLeft ? "" : " testimonials-nav-hidden"}`,
							onClick: scrollPrev,
							"aria-label": "Previous testimonial",
							disabled: !canScrollLeft,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 20 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: `testimonials-nav-btn testimonials-nav-right${canScrollRight ? "" : " testimonials-nav-hidden"}`,
							onClick: scrollNext,
							"aria-label": "Next testimonial",
							disabled: !canScrollRight,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 20 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "testimonials-carousel-track",
							ref: trackRef,
							role: "region",
							"aria-label": "Customer Testimonials Carousel",
							children: testimonials.map((t, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "testimonial-card-snap",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `glass-card p-4 h-100 d-flex flex-column justify-content-between position-relative overflow-hidden testimonial-card-inner${activeIndex === idx ? " testimonial-card-active" : ""}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "position-absolute top-0 start-0 w-100",
											style: {
												height: "3px",
												background: t.avatarGradient,
												opacity: .8
											}
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "d-flex align-items-center justify-content-between mb-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "badge bg-dark border border-secondary text-slate-300 font-monospace",
												style: {
													fontSize: "0.7rem",
													padding: "4px 8px"
												},
												children: t.highlightBadge
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "d-flex align-items-center gap-1",
												children: [...Array(t.rating)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
													size: 15,
													fill: "#f97316",
													color: "#f97316"
												}, i))
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-slate-300 small leading-relaxed mb-4",
											style: {
												fontSize: "0.925rem",
												lineHeight: "1.6"
											},
											children: [
												"\"",
												t.message,
												"\""
											]
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "pt-3 border-top border-secondary border-opacity-25 d-flex align-items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "rounded-circle d-flex align-items-center justify-content-center text-white fw-bold flex-shrink-0 shadow-sm",
												style: {
													width: "46px",
													height: "46px",
													background: t.avatarGradient,
													fontSize: "0.95rem",
													letterSpacing: "0.05em"
												},
												children: t.avatarInitials
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "overflow-hidden",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
														className: "fw-bold mb-0 text-white text-truncate",
														style: { fontSize: "0.95rem" },
														children: t.name
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-slate-400 small text-truncate",
														style: { fontSize: "0.78rem" },
														children: t.role
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "text-info font-monospace text-truncate d-flex align-items-center gap-1 mt-1",
														style: { fontSize: "0.72rem" },
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
															size: 11,
															className: "flex-shrink-0"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.company })]
													})
												]
											})]
										})
									]
								})
							}, t.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "testimonials-indicators",
							role: "tablist",
							"aria-label": "Testimonial navigation",
							children: testimonials.map((t, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: `testimonials-dot${activeIndex === idx ? " testimonials-dot-active" : ""}`,
								onClick: () => scrollToCard(idx),
								role: "tab",
								"aria-selected": activeIndex === idx,
								"aria-label": `Go to testimonial ${idx + 1}: ${t.name}`
							}, t.id))
						})
					]
				})]
			})
		]
	});
}
function FinalCTA() {
	const [isModalOpen, setIsModalOpen] = (0, import_react.useState)(false);
	const handleScroll = (id) => {
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: "smooth" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "final-cta",
		className: "section-padding text-center position-relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ambient-glow glow-orange",
				style: {
					bottom: "-20%",
					left: "30%"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container position-relative z-index-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "row justify-content-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-12 col-lg-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "display-4 fw-bold mb-4 text-white",
								style: {
									fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif",
									lineHeight: "1.35"
								},
								children: [
									"Build Every Project With One ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-warning",
										children: "Connected Construction Platform"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "lead fw-semibold mx-auto mb-5 max-w-3xl",
								style: {
									fontSize: "1.1rem",
									lineHeight: "1.6"
								},
								children: "Bring projects, materials, procurement, inventory, subcontractors, costs, and operational workflows together with ConstructionERP. Empower your field teams while retaining absolute financial supervision."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "d-flex flex-wrap gap-3 justify-content-center mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setIsModalOpen(true),
									className: "erp-cta-primary erp-explore-cta",
									"aria-label": "Explore ConstructionERP",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "erp-explore-cta__shimmer",
											"aria-hidden": "true"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Explore ConstructionERP" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
											size: 18,
											className: "erp-explore-cta__arrow"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => handleScroll("workflow"),
									className: "erp-cta-secondary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View Platform Workflow" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => handleScroll("hero"),
								className: "btn btn-link text-slate-400 text-decoration-none mt-3 d-inline-flex align-items-center gap-1 hover:text-white",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "small font-monospace uppercase",
									children: "Back To Top"
								})]
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryModal, {
				isOpen: isModalOpen,
				onClose: () => setIsModalOpen(false)
			})
		]
	});
}
var GITHUB_URL = "https://github.com/akashkarnan";
var LINKEDIN_URL = "https://linkedin.com";
var INSTAGRAM_URL = "https://instagram.com";
function Footer() {
	const handleScroll = (id) => {
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: "smooth" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "position-relative overflow-hidden border-top border-secondary border-opacity-20",
		style: {
			background: "#030712",
			paddingTop: "80px",
			paddingBottom: "40px"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ambient-glow glow-purple",
			style: {
				bottom: "-30%",
				right: "10%"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container position-relative z-index-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "row g-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "col-12 col-md-6 col-lg-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "fw-bold text-white fs-4 font-monospace d-block mb-3",
								children: ["Construction", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "gradient-text",
									children: "ERP"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-slate-400 small leading-relaxed",
								style: {
									fontSize: "0.85rem",
									maxWidth: "300px"
								},
								children: "ConstructionERP is a unified construction management platform connecting project execution, procurement, inventory, subcontractor billing, site logs, and ledger finance."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "col-12 col-sm-6 col-md-3 col-lg-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
								className: "text-white fw-bold small text-uppercase tracking-wider mb-4",
								style: {
									fontSize: "0.75rem",
									fontFamily: "'Outfit', sans-serif"
								},
								children: "Platform"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "list-unstyled p-0 m-0 d-flex flex-column gap-2",
								style: { fontSize: "0.825rem" },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleScroll("workcenter"),
										className: "btn btn-link p-0 text-slate-400 hover-text-warning text-decoration-none text-start small",
										children: "Work Center Hub"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleScroll("projects"),
										className: "btn btn-link p-0 text-slate-400 hover-text-warning text-decoration-none text-start small",
										children: "Projects Directory"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleScroll("boq"),
										className: "btn btn-link p-0 text-slate-400 hover-text-warning text-decoration-none text-start small",
										children: "BOQ & Estimates"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleScroll("procurement"),
										className: "btn btn-link p-0 text-slate-400 hover-text-warning text-decoration-none text-start small",
										children: "Procurement & POs"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleScroll("inventory"),
										className: "btn btn-link p-0 text-slate-400 hover-text-warning text-decoration-none text-start small",
										children: "Inventory Control"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleScroll("subcontractors"),
										className: "btn btn-link p-0 text-slate-400 hover-text-warning text-decoration-none text-start small",
										children: "Subcontractor Claims"
									}) })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "col-12 col-sm-6 col-md-3 col-lg-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
								className: "text-white fw-bold small text-uppercase tracking-wider mb-4",
								style: {
									fontSize: "0.75rem",
									fontFamily: "'Outfit', sans-serif"
								},
								children: "Team"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "list-unstyled p-0 m-0 d-flex flex-column gap-2",
								style: { fontSize: "0.825rem" },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleScroll("rbac"),
										className: "btn btn-link p-0 text-slate-400 hover-text-warning text-decoration-none text-start small",
										children: "Project Managers"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleScroll("rbac"),
										className: "btn btn-link p-0 text-slate-400 hover-text-warning text-decoration-none text-start small",
										children: "Estimation Engineers"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleScroll("rbac"),
										className: "btn btn-link p-0 text-slate-400 hover-text-warning text-decoration-none text-start small",
										children: "Procurement Officers"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleScroll("rbac"),
										className: "btn btn-link p-0 text-slate-400 hover-text-warning text-decoration-none text-start small",
										children: "Subcontractor Leads"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleScroll("rbac"),
										className: "btn btn-link p-0 text-slate-400 hover-text-warning text-decoration-none text-start small",
										children: "Financial Auditors"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleScroll("rbac"),
										className: "btn btn-link p-0 text-slate-400 hover-text-warning text-decoration-none text-start small",
										children: "Platform Administrators"
									}) })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "col-12 col-md-6 col-lg-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
								className: "text-white fw-bold small text-uppercase tracking-wider mb-4",
								style: {
									fontSize: "0.75rem",
									fontFamily: "'Outfit', sans-serif"
								},
								children: "Connect"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "list-unstyled p-0 m-0 d-flex flex-column gap-2 text-slate-400",
								style: { fontSize: "0.825rem" },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "mb-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "d-block small text-slate-500 font-monospace",
											style: { fontSize: "0.65rem" },
											children: "EMAIL SUPPORT"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "mailto:akashkarnan02@gmail.com",
											className: "text-white text-decoration-none hover-text-warning transition",
											children: "akashkarnan02@gmail.com"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "mb-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "d-block small text-slate-500 font-monospace",
											style: { fontSize: "0.65rem" },
											children: "CALL PLATFORM TEAM"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "tel:+919345631281",
											className: "text-white text-decoration-none hover-text-warning transition",
											children: "+91-9345631281"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "mt-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "d-flex align-items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: GITHUB_URL,
													target: "_blank",
													rel: "noopener noreferrer",
													className: "social-icon",
													title: "GitHub",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
														xmlns: "http://www.w3.org/2000/svg",
														width: "16",
														height: "16",
														fill: "currentColor",
														viewBox: "0 0 24 24",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" })
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: LINKEDIN_URL,
													target: "_blank",
													rel: "noopener noreferrer",
													className: "social-icon",
													title: "LinkedIn",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
														xmlns: "http://www.w3.org/2000/svg",
														width: "16",
														height: "16",
														fill: "currentColor",
														viewBox: "0 0 24 24",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" })
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: INSTAGRAM_URL,
													target: "_blank",
													rel: "noopener noreferrer",
													className: "social-icon",
													title: "Instagram",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
														xmlns: "http://www.w3.org/2000/svg",
														width: "16",
														height: "16",
														fill: "currentColor",
														viewBox: "0 0 24 24",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" })
													})
												})
											]
										})
									})
								]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "border-top border-secondary border-opacity-10 my-5" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "row justify-content-center text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "erp-footer-copyright",
							children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" ConstructionERP. All rights reserved."
							]
						})
					})
				})
			]
		})]
	});
}
var navItems = [
	{
		label: "Solutions",
		target: "problem-solutions"
	},
	{
		label: "Services",
		target: "modules"
	},
	{
		label: "Client",
		target: "clients"
	},
	{
		label: "Testimonials",
		target: "testimonials"
	},
	{
		label: "FAQ",
		target: "faq"
	}
];
var SECTION_IDS = ["hero", ...navItems.map((n) => n.target)];
function TopNavigation() {
	const [activeSection, setActiveSection] = (0, import_react.useState)("hero");
	const [isScrolled, setIsScrolled] = (0, import_react.useState)(false);
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 40);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		const observers = [];
		const sectionMap = /* @__PURE__ */ new Map();
		SECTION_IDS.forEach((id) => {
			const el = document.getElementById(id);
			if (!el) return;
			const observer = new IntersectionObserver(([entry]) => {
				sectionMap.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
				let best = "hero", bestRatio = -1;
				sectionMap.forEach((ratio, sId) => {
					if (ratio > bestRatio) {
						bestRatio = ratio;
						best = sId;
					}
				});
				setActiveSection(best);
			}, {
				threshold: [
					.15,
					.35,
					.5
				],
				rootMargin: "-80px 0px -30% 0px"
			});
			observer.observe(el);
			observers.push(observer);
		});
		return () => observers.forEach((o) => o.disconnect());
	}, []);
	const scrollTo = (0, import_react.useCallback)((id) => {
		const el = document.getElementById(id);
		if (!el) return;
		const top = el.getBoundingClientRect().top + window.scrollY - 72;
		window.scrollTo({
			top,
			behavior: "smooth"
		});
		setMenuOpen(false);
	}, []);
	(0, import_react.useEffect)(() => {
		const onResize = () => {
			if (window.innerWidth >= 992) setMenuOpen(false);
		};
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = menuOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [menuOpen]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: `erp-topnav${isScrolled ? " erp-topnav--scrolled" : ""}`,
		role: "navigation",
		"aria-label": "Main navigation",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "erp-topnav__inner",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "erp-topnav__brand",
					onClick: () => scrollTo("hero"),
					"aria-label": "Back to top",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: image_default,
						alt: "ERP Logo",
						className: "erp-navbar-logo"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "erp-topnav__brand-text",
						children: ["Construction", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "gradient-text",
							children: "ERP"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "erp-topnav__pill-container d-none d-lg-flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "erp-topnav__pill-links",
						role: "list",
						children: navItems.map(({ label, target }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: `erp-topnav__pill-link${activeSection === target ? " erp-topnav__pill-link--active" : ""}`,
							onClick: () => scrollTo(target),
							"aria-current": activeSection === target ? "true" : void 0,
							children: label
						}) }, target))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "d-flex align-items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "erp-topnav__contact-btn d-none d-sm-inline-flex",
						onClick: () => scrollTo("contact"),
						"aria-label": "Contact Us",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 14 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Contact Us" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "erp-topnav__hamburger",
						onClick: () => setMenuOpen((v) => !v),
						"aria-expanded": menuOpen,
						"aria-controls": "erp-mobile-menu",
						"aria-label": menuOpen ? "Close navigation menu" : "Open navigation menu",
						children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 22 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 22 })
					})]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "erp-mobile-menu",
		className: `erp-mobile-menu${menuOpen ? " erp-mobile-menu--open" : ""}`,
		"aria-hidden": !menuOpen,
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "Mobile navigation",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "erp-mobile-menu__backdrop",
			onClick: () => setMenuOpen(false),
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "erp-mobile-menu__panel",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "erp-mobile-menu__header",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "erp-topnav__brand-text",
					children: ["Construction", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "gradient-text",
						children: "ERP"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "erp-topnav__hamburger",
					onClick: () => setMenuOpen(false),
					"aria-label": "Close navigation menu",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 22 })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "erp-mobile-menu__list",
				role: "list",
				children: navItems.map(({ label, target }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: `erp-mobile-menu__item${activeSection === target ? " erp-mobile-menu__item--active" : ""}`,
					onClick: () => scrollTo(target),
					"aria-current": activeSection === target ? "true" : void 0,
					children: label
				}) }, target))
			})]
		})]
	})] });
}
var bgimage1_default = "/assets/bgimage1-Beio_h61.png";
function Index() {
	(0, import_react.useEffect)(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) entry.target.classList.add("reveal-active");
			});
		}, {
			threshold: .1,
			rootMargin: "0px 0px -40px 0px"
		});
		const elements = document.querySelectorAll(".reveal");
		elements.forEach((el) => observer.observe(el));
		return () => {
			elements.forEach((el) => observer.unobserve(el));
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "erp-portfolio-page text-light position-relative",
		style: {
			backgroundImage: `url(${bgimage1_default})`,
			backgroundSize: "cover",
			backgroundPosition: "center",
			backgroundAttachment: "fixed",
			backgroundRepeat: "no-repeat",
			minHeight: "100vh"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mobile-bg-fixed-layer d-md-none",
				style: {
					position: "fixed",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					width: "100vw",
					height: "100vh",
					height: "100dvh",
					backgroundImage: `url(${bgimage1_default})`,
					backgroundSize: "cover",
					backgroundPosition: "25% center",
					backgroundRepeat: "no-repeat",
					zIndex: 0,
					pointerEvents: "none"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopNavigation, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "glass-bg-overlay" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "reveal",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "reveal",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overview, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "reveal",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientsSection, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "reveal",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modules, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "reveal",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProblemSolutionSection, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "reveal",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductShowcase, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "reveal",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkCenterSection, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "reveal",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectManagement, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "reveal",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BOQSection, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "reveal",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcurementSection, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "reveal",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InventorySection, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "reveal",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubcontractorSection, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "reveal",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinanceSection, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "reveal",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkflowSection, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "reveal",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lifecycle, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "reveal",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBACSection, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "reveal",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechnologyStack, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "reveal",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "reveal",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCTA, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "reveal",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQSection, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "reveal",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
