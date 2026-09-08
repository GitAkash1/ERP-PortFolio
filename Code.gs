function doPost(e) {
  try {
    var SPREADSHEET_ID = "10wg0yhJVYrQJzaLN307aq7YaOz7H_uzErv-ylCGPTQ";
    var ss;

    // 1. Try active spreadsheet if container-bound
    try {
      ss = SpreadsheetApp.getActiveSpreadsheet();
    } catch (err) {
      ss = null;
    }

    // 2. Open by exact Spreadsheet ID
    if (!ss) {
      ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    }

    // 3. Get customer_Sheet1 tab
    var sheet = ss.getSheetByName("customer_Sheet1") || ss.getSheetByName("Sheet1") || ss.getSheets()[0];

    var data = (e && e.parameter) ? e.parameter : {};

    var name = data.Name || data.name || "";
    var email = data.Email || data.email || "";
    var mobile = data.Mobile || data.phone || data.mobile || "";
    var company = data.Company_name || data.company || data.Company || "";
    var enquiry = data.Enquiry || data.subject || data.enquiry || "";
    var message = data.Message || data.message || "";

    sheet.appendRow([
      name,
      email,
      mobile,
      company,
      enquiry,
      message
    ]);

    return ContentService
      .createTextOutput(
        JSON.stringify({
          success: true,
          message: "Added successfully"
        })
      )
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(
        JSON.stringify({
          success: false,
          message: "Failed to store enquiry: " + error.toString()
        })
      )
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(
      JSON.stringify({
        status: "online",
        message: "Google Apps Script Web App is active and ready."
      })
    )
    .setMimeType(ContentService.MimeType.JSON);
}
