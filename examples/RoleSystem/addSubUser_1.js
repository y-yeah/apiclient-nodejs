const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Create a new subuser for account_id = 1
  client.RoleSystem.addSubUser({newSubuserName: 'test_login',
            newSubuserPassword: 'test_pass'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};