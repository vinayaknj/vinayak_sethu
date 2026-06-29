/* 
  COPY THIS CODE INTO YOUR GOOGLE APPS SCRIPT
  
  Instructions:
  1. Open your Google Sheet.
  2. Go to Extensions -> Apps Script.
  3. Delete any code already there and paste this code.
  4. Click "Deploy" -> "New Deployment".
  5. Select type "Web App".
  6. Set "Execute as" to "Me".
  7. Set "Who has access" to "Anyone".
  8. Click "Deploy", copy the Web App URL, and paste it into index.html.
*/

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var name = e.parameter.name;
    var attend = e.parameter.attend;
    var guests = e.parameter.guests;
    var message = e.parameter.message;
    
    sheet.appendRow([new Date(), name, attend, guests, message]);
    
    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
  } catch (error) {
    return ContentService.createTextOutput("Error: " + error.toString()).setMimeType(ContentService.MimeType.TEXT);
  }
}
