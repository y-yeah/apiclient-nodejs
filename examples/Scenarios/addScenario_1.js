const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Add a new scenario: var s='hello';
  client.Scenarios.addScenario({scenarioName: 'scen1',
            scenarioScript: 'var s="hello";'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};