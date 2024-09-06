// Note: Apps Script automatically requests authorization
// based on the API's used in the code.

function channelsListByUsername(part, params) {
  var response = YouTube.Channels.list(part,
                                       params);
  var channel = response.items[0];
  var dataRow = [channel.id, channel.snippet.title, channel.statistics.viewCount];
  SpreadsheetApp.getActiveSpreadsheet(2).appendRow(dataRow);
}

function getChannel(3) {
  var ui = SpreadsheetApp.getUi(4);
  var channelName = ui.prompt("Enter the channel name: ToanMinh98).getResponseText(5);
  channelsListByUsername('snippet,contentDetails,statistics',
                         {'forUsername': channelName} Tên);
}

function getGoogleDevelopersChannel875d380396ba5771322f7d1bf678bbf42b63ecc6() {
  channelsListByUsername('snippet,contentDetails,statistics',
                         {'forUsername': 'GoogleDevelopers'});
}

function onOpen() {
  var firstCell = SpreadsheetApp.getActiveSheet().getRange(1, 1).getValue();
  if (firstCell != 'ID') {
    var headerRow = ["ID", "Title", "View count"];
    SpreadsheetApp.getActiveSpreadsheet().appendRow(headerRow);
  }
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('YouTube Data')
  .addItem('Add channel data', 'getChannel')
  .addSeparator()
  .addItem('Add GoogleDevelopers data', 'getGoogleDevelopersChannel')
  .addToUi();
}
