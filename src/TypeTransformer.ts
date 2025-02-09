export default class TypeTransformer{
  private static fromActors = {
    'API_Error': function(data){
      const xData = {};
      if(typeof data['code'] !== 'undefined') xData['code'] = TypeTransformer.to('number')(data['code']);
      if(typeof data['msg'] !== 'undefined') xData['msg'] = TypeTransformer.to('string')(data['msg']);  
      return xData;
},
    'AccountInfoType': function(data){
      const xData = {};
      if(typeof data['account_id'] !== 'undefined') xData['accountId'] = TypeTransformer.to('number')(data['account_id']);
      if(typeof data['account_name'] !== 'undefined') xData['accountName'] = TypeTransformer.to('string')(data['account_name']);
      if(typeof data['account_email'] !== 'undefined') xData['accountEmail'] = TypeTransformer.to('string')(data['account_email']);
      if(typeof data['api_key'] !== 'undefined') xData['apiKey'] = TypeTransformer.to('string')(data['api_key']);
      if(typeof data['account_first_name'] !== 'undefined') xData['accountFirstName'] = TypeTransformer.to('string')(data['account_first_name']);
      if(typeof data['account_last_name'] !== 'undefined') xData['accountLastName'] = TypeTransformer.to('string')(data['account_last_name']);
      if(typeof data['created'] !== 'undefined') xData['created'] = TypeTransformer.to('Date')(data['created']);
      if(typeof data['language_code'] !== 'undefined') xData['languageCode'] = TypeTransformer.to('string')(data['language_code']);
      if(typeof data['location'] !== 'undefined') xData['location'] = TypeTransformer.to('string')(data['location']);
      if(typeof data['min_balance_to_notify'] !== 'undefined') xData['minBalanceToNotify'] = TypeTransformer.to('number')(data['min_balance_to_notify']);
      if(typeof data['account_notifications'] !== 'undefined') xData['accountNotifications'] = TypeTransformer.to('boolean')(data['account_notifications']);
      if(typeof data['tariff_changing_notifications'] !== 'undefined') xData['tariffChangingNotifications'] = TypeTransformer.to('boolean')(data['tariff_changing_notifications']);
      if(typeof data['news_notifications'] !== 'undefined') xData['newsNotifications'] = TypeTransformer.to('boolean')(data['news_notifications']);
      if(typeof data['billing_address_name'] !== 'undefined') xData['billingAddressName'] = TypeTransformer.to('string')(data['billing_address_name']);
      if(typeof data['billing_address_country_code'] !== 'undefined') xData['billingAddressCountryCode'] = TypeTransformer.to('string')(data['billing_address_country_code']);
      if(typeof data['billing_address_address'] !== 'undefined') xData['billingAddressAddress'] = TypeTransformer.to('string')(data['billing_address_address']);
      if(typeof data['billing_address_zip'] !== 'undefined') xData['billingAddressZip'] = TypeTransformer.to('string')(data['billing_address_zip']);
      if(typeof data['billing_address_phone'] !== 'undefined') xData['billingAddressPhone'] = TypeTransformer.to('string')(data['billing_address_phone']);
      if(typeof data['billing_address_state'] !== 'undefined') xData['billingAddressState'] = TypeTransformer.to('string')(data['billing_address_state']);
      if(typeof data['active'] !== 'undefined') xData['active'] = TypeTransformer.to('boolean')(data['active']);
      if(typeof data['frozen'] !== 'undefined') xData['frozen'] = TypeTransformer.to('boolean')(data['frozen']);
      if(typeof data['balance'] !== 'undefined') xData['balance'] = TypeTransformer.to('number')(data['balance']);
      if(typeof data['credit_limit'] !== 'undefined') xData['creditLimit'] = TypeTransformer.to('number')(data['credit_limit']);
      if(typeof data['currency'] !== 'undefined') xData['currency'] = TypeTransformer.to('string')(data['currency']);
      if(typeof data['support_robokassa'] !== 'undefined') xData['supportRobokassa'] = TypeTransformer.to('boolean')(data['support_robokassa']);
      if(typeof data['support_bank_card'] !== 'undefined') xData['supportBankCard'] = TypeTransformer.to('boolean')(data['support_bank_card']);
      if(typeof data['support_invoice'] !== 'undefined') xData['supportInvoice'] = TypeTransformer.to('boolean')(data['support_invoice']);
      if(typeof data['account_custom_data'] !== 'undefined') xData['accountCustomData'] = TypeTransformer.to('string')(data['account_custom_data']);
      if(typeof data['access_entries'] !== 'undefined') xData['accessEntries'] = TypeTransformer.to('string[]')(data['access_entries']);
      if(typeof data['with_access_entries'] !== 'undefined') xData['withAccessEntries'] = TypeTransformer.to('boolean')(data['with_access_entries']);
      if(typeof data['callback_url'] !== 'undefined') xData['callbackUrl'] = TypeTransformer.to('string')(data['callback_url']);
      if(typeof data['callback_salt'] !== 'undefined') xData['callbackSalt'] = TypeTransformer.to('string')(data['callback_salt']);
      if(typeof data['send_js_error'] !== 'undefined') xData['sendJsError'] = TypeTransformer.to('boolean')(data['send_js_error']);
      if(typeof data['billing_limits'] !== 'undefined') xData['billingLimits'] = TypeTransformer.to('BillingLimits')(data['billing_limits']);  
      return xData;
},
    'BillingLimitsType': function(data){
      const xData = {};
      if(typeof data['robokassa'] !== 'undefined') xData['robokassa'] = TypeTransformer.to('BillingLimitInfo')(data['robokassa']);
      if(typeof data['bank_card'] !== 'undefined') xData['bankCard'] = TypeTransformer.to('BillingLimitInfo')(data['bank_card']);
      if(typeof data['invoice'] !== 'undefined') xData['invoice'] = TypeTransformer.to('BillingLimitInfo')(data['invoice']);  
      return xData;
},
    'BillingLimitInfoType': function(data){
      const xData = {};
      if(typeof data['min_amount'] !== 'undefined') xData['minAmount'] = TypeTransformer.to('number')(data['min_amount']);
      if(typeof data['currency'] !== 'undefined') xData['currency'] = TypeTransformer.to('string')(data['currency']);  
      return xData;
},
    'ShortAccountInfoType': function(data){
      const xData = {};
      if(typeof data['account_id'] !== 'undefined') xData['accountId'] = TypeTransformer.to('number')(data['account_id']);
      if(typeof data['frozen'] !== 'undefined') xData['frozen'] = TypeTransformer.to('boolean')(data['frozen']);
      if(typeof data['balance'] !== 'undefined') xData['balance'] = TypeTransformer.to('number')(data['balance']);
      if(typeof data['currency'] !== 'undefined') xData['currency'] = TypeTransformer.to('string')(data['currency']);  
      return xData;
},
    'ClonedAccountType': function(data){
      const xData = {};
      if(typeof data['account_id'] !== 'undefined') xData['accountId'] = TypeTransformer.to('number')(data['account_id']);
      if(typeof data['account_name'] !== 'undefined') xData['accountName'] = TypeTransformer.to('string')(data['account_name']);
      if(typeof data['account_email'] !== 'undefined') xData['accountEmail'] = TypeTransformer.to('string')(data['account_email']);
      if(typeof data['active'] !== 'undefined') xData['active'] = TypeTransformer.to('boolean')(data['active']);
      if(typeof data['api_key'] !== 'undefined') xData['apiKey'] = TypeTransformer.to('string')(data['api_key']);
      if(typeof data['users'] !== 'undefined') xData['users'] = TypeTransformer.to('ClonedUser[]')(data['users']);
      if(typeof data['scenarios'] !== 'undefined') xData['scenarios'] = TypeTransformer.to('ClonedScenario[]')(data['scenarios']);
      if(typeof data['applications'] !== 'undefined') xData['applications'] = TypeTransformer.to('ClonedApplication[]')(data['applications']);
      if(typeof data['acd_queues'] !== 'undefined') xData['acdQueues'] = TypeTransformer.to('ClonedACDQueue[]')(data['acd_queues']);
      if(typeof data['acd_skills'] !== 'undefined') xData['acdSkills'] = TypeTransformer.to('ClonedACDSkill[]')(data['acd_skills']);
      if(typeof data['admin_roles'] !== 'undefined') xData['adminRoles'] = TypeTransformer.to('ClonedAdminRole[]')(data['admin_roles']);
      if(typeof data['admin_users'] !== 'undefined') xData['adminUsers'] = TypeTransformer.to('ClonedAdminUser[]')(data['admin_users']);  
      return xData;
},
    'AccountPlanPackageType': function(data){
      const xData = {};
      if(typeof data['price_group_id'] !== 'undefined') xData['priceGroupId'] = TypeTransformer.to('number[]')(data['price_group_id']);
      if(typeof data['package_name'] !== 'undefined') xData['packageName'] = TypeTransformer.to('string')(data['package_name']);
      if(typeof data['may_overrun'] !== 'undefined') xData['mayOverrun'] = TypeTransformer.to('boolean')(data['may_overrun']);
      if(typeof data['overrun_price'] !== 'undefined') xData['overrunPrice'] = TypeTransformer.to('number')(data['overrun_price']);
      if(typeof data['overrun_resources'] !== 'undefined') xData['overrunResources'] = TypeTransformer.to('number')(data['overrun_resources']);
      if(typeof data['resource_left'] !== 'undefined') xData['resourceLeft'] = TypeTransformer.to('number')(data['resource_left']);
      if(typeof data['package_size'] !== 'undefined') xData['packageSize'] = TypeTransformer.to('number')(data['package_size']);
      if(typeof data['orig_package_size'] !== 'undefined') xData['origPackageSize'] = TypeTransformer.to('number')(data['orig_package_size']);  
      return xData;
},
    'PlanPackageType': function(data){
      const xData = {};
      if(typeof data['price_group_id'] !== 'undefined') xData['priceGroupId'] = TypeTransformer.to('number[]')(data['price_group_id']);
      if(typeof data['package_name'] !== 'undefined') xData['packageName'] = TypeTransformer.to('string')(data['package_name']);
      if(typeof data['may_overrun'] !== 'undefined') xData['mayOverrun'] = TypeTransformer.to('boolean')(data['may_overrun']);
      if(typeof data['overrun_price'] !== 'undefined') xData['overrunPrice'] = TypeTransformer.to('number')(data['overrun_price']);
      if(typeof data['overrun_resources'] !== 'undefined') xData['overrunResources'] = TypeTransformer.to('number')(data['overrun_resources']);
      if(typeof data['package_size'] !== 'undefined') xData['packageSize'] = TypeTransformer.to('number')(data['package_size']);  
      return xData;
},
    'ApplicationInfoType': function(data){
      const xData = {};
      if(typeof data['application_id'] !== 'undefined') xData['applicationId'] = TypeTransformer.to('number')(data['application_id']);
      if(typeof data['application_name'] !== 'undefined') xData['applicationName'] = TypeTransformer.to('string')(data['application_name']);
      if(typeof data['modified'] !== 'undefined') xData['modified'] = TypeTransformer.to('Date')(data['modified']);
      if(typeof data['secure_record_storage'] !== 'undefined') xData['secureRecordStorage'] = TypeTransformer.to('boolean')(data['secure_record_storage']);
      if(typeof data['users'] !== 'undefined') xData['users'] = TypeTransformer.to('UserInfo[]')(data['users']);  
      return xData;
},
    'ClonedApplicationType': function(data){
      const xData = {};
      if(typeof data['application_id'] !== 'undefined') xData['applicationId'] = TypeTransformer.to('number')(data['application_id']);
      if(typeof data['application_name'] !== 'undefined') xData['applicationName'] = TypeTransformer.to('string')(data['application_name']);
      if(typeof data['users'] !== 'undefined') xData['users'] = TypeTransformer.to('ClonedRule[]')(data['users']);  
      return xData;
},
    'UserInfoType': function(data){
      const xData = {};
      if(typeof data['user_id'] !== 'undefined') xData['userId'] = TypeTransformer.to('number')(data['user_id']);
      if(typeof data['user_name'] !== 'undefined') xData['userName'] = TypeTransformer.to('string')(data['user_name']);
      if(typeof data['user_display_name'] !== 'undefined') xData['userDisplayName'] = TypeTransformer.to('string')(data['user_display_name']);
      if(typeof data['user_active'] !== 'undefined') xData['userActive'] = TypeTransformer.to('boolean')(data['user_active']);
      if(typeof data['parent_accounting'] !== 'undefined') xData['parentAccounting'] = TypeTransformer.to('boolean')(data['parent_accounting']);
      if(typeof data['mobile_phone'] !== 'undefined') xData['mobilePhone'] = TypeTransformer.to('string')(data['mobile_phone']);
      if(typeof data['live_balance'] !== 'undefined') xData['liveBalance'] = TypeTransformer.to('number')(data['live_balance']);
      if(typeof data['balance'] !== 'undefined') xData['balance'] = TypeTransformer.to('number')(data['balance']);
      if(typeof data['fixed_balance'] !== 'undefined') xData['fixedBalance'] = TypeTransformer.to('number')(data['fixed_balance']);
      if(typeof data['user_custom_data'] !== 'undefined') xData['userCustomData'] = TypeTransformer.to('string')(data['user_custom_data']);
      if(typeof data['applications'] !== 'undefined') xData['applications'] = TypeTransformer.to('ApplicationInfo[]')(data['applications']);
      if(typeof data['skills'] !== 'undefined') xData['skills'] = TypeTransformer.to('SkillInfo[]')(data['skills']);
      if(typeof data['acd_queues'] !== 'undefined') xData['acdQueues'] = TypeTransformer.to('ACDQueueOperatorInfo[]')(data['acd_queues']);
      if(typeof data['acd_status'] !== 'undefined') xData['acdStatus'] = TypeTransformer.to('string')(data['acd_status']);
      if(typeof data['acd_status_change_time'] !== 'undefined') xData['acdStatusChangeTime'] = TypeTransformer.to('Date')(data['acd_status_change_time']);
      if(typeof data['created'] !== 'undefined') xData['created'] = TypeTransformer.to('Date')(data['created']);
      if(typeof data['modified'] !== 'undefined') xData['modified'] = TypeTransformer.to('Date')(data['modified']);  
      return xData;
},
    'ClonedUserType': function(data){
      const xData = {};
      if(typeof data['user_id'] !== 'undefined') xData['userId'] = TypeTransformer.to('number')(data['user_id']);
      if(typeof data['user_name'] !== 'undefined') xData['userName'] = TypeTransformer.to('string')(data['user_name']);  
      return xData;
},
    'ScenarioInfoType': function(data){
      const xData = {};
      if(typeof data['scenario_id'] !== 'undefined') xData['scenarioId'] = TypeTransformer.to('number')(data['scenario_id']);
      if(typeof data['scenario_name'] !== 'undefined') xData['scenarioName'] = TypeTransformer.to('string')(data['scenario_name']);
      if(typeof data['scenario_script'] !== 'undefined') xData['scenarioScript'] = TypeTransformer.to('string')(data['scenario_script']);
      if(typeof data['modified'] !== 'undefined') xData['modified'] = TypeTransformer.to('Date')(data['modified']);
      if(typeof data['parent'] !== 'undefined') xData['parent'] = TypeTransformer.to('boolean')(data['parent']);  
      return xData;
},
    'ClonedScenarioType': function(data){
      const xData = {};
      if(typeof data['scenario_id'] !== 'undefined') xData['scenarioId'] = TypeTransformer.to('number')(data['scenario_id']);
      if(typeof data['scenario_name'] !== 'undefined') xData['scenarioName'] = TypeTransformer.to('string')(data['scenario_name']);  
      return xData;
},
    'RuleInfoType': function(data){
      const xData = {};
      if(typeof data['rule_id'] !== 'undefined') xData['ruleId'] = TypeTransformer.to('number')(data['rule_id']);
      if(typeof data['application_id'] !== 'undefined') xData['applicationId'] = TypeTransformer.to('number')(data['application_id']);
      if(typeof data['rule_name'] !== 'undefined') xData['ruleName'] = TypeTransformer.to('string')(data['rule_name']);
      if(typeof data['rule_pattern'] !== 'undefined') xData['rulePattern'] = TypeTransformer.to('string')(data['rule_pattern']);
      if(typeof data['rule_pattern_exclude'] !== 'undefined') xData['rulePatternExclude'] = TypeTransformer.to('string')(data['rule_pattern_exclude']);
      if(typeof data['video_conference'] !== 'undefined') xData['videoConference'] = TypeTransformer.to('boolean')(data['video_conference']);
      if(typeof data['scenarios'] !== 'undefined') xData['scenarios'] = TypeTransformer.to('ScenarioInfo[]')(data['scenarios']);
      if(typeof data['modified'] !== 'undefined') xData['modified'] = TypeTransformer.to('Date')(data['modified']);  
      return xData;
},
    'ClonedRuleType': function(data){
      const xData = {};
      if(typeof data['rule_id'] !== 'undefined') xData['ruleId'] = TypeTransformer.to('number')(data['rule_id']);
      if(typeof data['rule_name'] !== 'undefined') xData['ruleName'] = TypeTransformer.to('string')(data['rule_name']);  
      return xData;
},
    'SipWhiteListInfoType': function(data){
      const xData = {};
      if(typeof data['sip_whitelist_id'] !== 'undefined') xData['sipWhitelistId'] = TypeTransformer.to('number')(data['sip_whitelist_id']);
      if(typeof data['sip_whitelist_network'] !== 'undefined') xData['sipWhitelistNetwork'] = TypeTransformer.to('string')(data['sip_whitelist_network']);  
      return xData;
},
    'CallSessionInfoType': function(data){
      const xData = {};
      if(typeof data['call_session_history_id'] !== 'undefined') xData['callSessionHistoryId'] = TypeTransformer.to('number')(data['call_session_history_id']);
      if(typeof data['account_id'] !== 'undefined') xData['accountId'] = TypeTransformer.to('number')(data['account_id']);
      if(typeof data['application_id'] !== 'undefined') xData['applicationId'] = TypeTransformer.to('number')(data['application_id']);
      if(typeof data['user_id'] !== 'undefined') xData['userId'] = TypeTransformer.to('number')(data['user_id']);
      if(typeof data['start_date'] !== 'undefined') xData['startDate'] = TypeTransformer.to('Date')(data['start_date']);
      if(typeof data['duration'] !== 'undefined') xData['duration'] = TypeTransformer.to('number')(data['duration']);
      if(typeof data['initiator_address'] !== 'undefined') xData['initiatorAddress'] = TypeTransformer.to('string')(data['initiator_address']);
      if(typeof data['media_server_address'] !== 'undefined') xData['mediaServerAddress'] = TypeTransformer.to('string')(data['media_server_address']);
      if(typeof data['log_file_url'] !== 'undefined') xData['logFileUrl'] = TypeTransformer.to('string')(data['log_file_url']);
      if(typeof data['finish_reason'] !== 'undefined') xData['finishReason'] = TypeTransformer.to('string')(data['finish_reason']);
      if(typeof data['calls'] !== 'undefined') xData['calls'] = TypeTransformer.to('CallInfo[]')(data['calls']);
      if(typeof data['other_resource_usage'] !== 'undefined') xData['otherResourceUsage'] = TypeTransformer.to('ResourceUsage[]')(data['other_resource_usage']);
      if(typeof data['records'] !== 'undefined') xData['records'] = TypeTransformer.to('Record[]')(data['records']);
      if(typeof data['custom_data'] !== 'undefined') xData['customData'] = TypeTransformer.to('string')(data['custom_data']);  
      return xData;
},
    'CallInfoType': function(data){
      const xData = {};
      if(typeof data['call_id'] !== 'undefined') xData['callId'] = TypeTransformer.to('number')(data['call_id']);
      if(typeof data['start_time'] !== 'undefined') xData['startTime'] = TypeTransformer.to('Date')(data['start_time']);
      if(typeof data['duration'] !== 'undefined') xData['duration'] = TypeTransformer.to('number')(data['duration']);
      if(typeof data['local_number'] !== 'undefined') xData['localNumber'] = TypeTransformer.to('string')(data['local_number']);
      if(typeof data['remote_number'] !== 'undefined') xData['remoteNumber'] = TypeTransformer.to('string')(data['remote_number']);
      if(typeof data['remote_number_type'] !== 'undefined') xData['remoteNumberType'] = TypeTransformer.to('string')(data['remote_number_type']);
      if(typeof data['incoming'] !== 'undefined') xData['incoming'] = TypeTransformer.to('boolean')(data['incoming']);
      if(typeof data['successful'] !== 'undefined') xData['successful'] = TypeTransformer.to('boolean')(data['successful']);
      if(typeof data['transaction_id'] !== 'undefined') xData['transactionId'] = TypeTransformer.to('number')(data['transaction_id']);
      if(typeof data['record_url'] !== 'undefined') xData['recordUrl'] = TypeTransformer.to('string')(data['record_url']);
      if(typeof data['media_server_address'] !== 'undefined') xData['mediaServerAddress'] = TypeTransformer.to('string')(data['media_server_address']);
      if(typeof data['cost'] !== 'undefined') xData['cost'] = TypeTransformer.to('number')(data['cost']);
      if(typeof data['custom_data'] !== 'undefined') xData['customData'] = TypeTransformer.to('string')(data['custom_data']);  
      return xData;
},
    'TransactionInfoType': function(data){
      const xData = {};
      if(typeof data['transaction_id'] !== 'undefined') xData['transactionId'] = TypeTransformer.to('number')(data['transaction_id']);
      if(typeof data['account_id'] !== 'undefined') xData['accountId'] = TypeTransformer.to('string')(data['account_id']);
      if(typeof data['performed_at'] !== 'undefined') xData['performedAt'] = TypeTransformer.to('Date')(data['performed_at']);
      if(typeof data['amount'] !== 'undefined') xData['amount'] = TypeTransformer.to('number')(data['amount']);
      if(typeof data['currency'] !== 'undefined') xData['currency'] = TypeTransformer.to('string')(data['currency']);
      if(typeof data['transaction_type'] !== 'undefined') xData['transactionType'] = TypeTransformer.to('string')(data['transaction_type']);
      if(typeof data['transaction_description'] !== 'undefined') xData['transactionDescription'] = TypeTransformer.to('string')(data['transaction_description']);
      if(typeof data['payment_reference'] !== 'undefined') xData['paymentReference'] = TypeTransformer.to('string')(data['payment_reference']);  
      return xData;
},
    'ResourceUsageType': function(data){
      const xData = {};
      if(typeof data['resource_usage_id'] !== 'undefined') xData['resourceUsageId'] = TypeTransformer.to('number')(data['resource_usage_id']);
      if(typeof data['resource_type'] !== 'undefined') xData['resourceType'] = TypeTransformer.to('string')(data['resource_type']);
      if(typeof data['cost'] !== 'undefined') xData['cost'] = TypeTransformer.to('number')(data['cost']);
      if(typeof data['description'] !== 'undefined') xData['description'] = TypeTransformer.to('string')(data['description']);
      if(typeof data['used_at'] !== 'undefined') xData['usedAt'] = TypeTransformer.to('Date')(data['used_at']);
      if(typeof data['transaction_id'] !== 'undefined') xData['transactionId'] = TypeTransformer.to('number')(data['transaction_id']);
      if(typeof data['resource_quantity'] !== 'undefined') xData['resourceQuantity'] = TypeTransformer.to('number')(data['resource_quantity']);
      if(typeof data['unit'] !== 'undefined') xData['unit'] = TypeTransformer.to('string')(data['unit']);
      if(typeof data['ref_call_id'] !== 'undefined') xData['refCallId'] = TypeTransformer.to('number')(data['ref_call_id']);  
      return xData;
},
    'RecordType': function(data){
      const xData = {};
      if(typeof data['record_id'] !== 'undefined') xData['recordId'] = TypeTransformer.to('number')(data['record_id']);
      if(typeof data['record_name'] !== 'undefined') xData['recordName'] = TypeTransformer.to('string')(data['record_name']);
      if(typeof data['cost'] !== 'undefined') xData['cost'] = TypeTransformer.to('number')(data['cost']);
      if(typeof data['start_time'] !== 'undefined') xData['startTime'] = TypeTransformer.to('Date')(data['start_time']);
      if(typeof data['duration'] !== 'undefined') xData['duration'] = TypeTransformer.to('number')(data['duration']);
      if(typeof data['record_url'] !== 'undefined') xData['recordUrl'] = TypeTransformer.to('string')(data['record_url']);
      if(typeof data['transaction_id'] !== 'undefined') xData['transactionId'] = TypeTransformer.to('number')(data['transaction_id']);
      if(typeof data['file_size'] !== 'undefined') xData['fileSize'] = TypeTransformer.to('number')(data['file_size']);
      if(typeof data['transcription_url'] !== 'undefined') xData['transcriptionUrl'] = TypeTransformer.to('string')(data['transcription_url']);
      if(typeof data['transcription_status'] !== 'undefined') xData['transcriptionStatus'] = TypeTransformer.to('string')(data['transcription_status']);  
      return xData;
},
    'AuditLogInfoType': function(data){
      const xData = {};
      if(typeof data['audit_log_id'] !== 'undefined') xData['auditLogId'] = TypeTransformer.to('number')(data['audit_log_id']);
      if(typeof data['account_id'] !== 'undefined') xData['accountId'] = TypeTransformer.to('number')(data['account_id']);
      if(typeof data['requested'] !== 'undefined') xData['requested'] = TypeTransformer.to('Date')(data['requested']);
      if(typeof data['ip'] !== 'undefined') xData['ip'] = TypeTransformer.to('string')(data['ip']);
      if(typeof data['cmd_name'] !== 'undefined') xData['cmdName'] = TypeTransformer.to('string')(data['cmd_name']);
      if(typeof data['cmd_args'] !== 'undefined') xData['cmdArgs'] = TypeTransformer.to('any')(data['cmd_args']);
      if(typeof data['cmd_result'] !== 'undefined') xData['cmdResult'] = TypeTransformer.to('any')(data['cmd_result']);  
      return xData;
},
    'HistoryReportType': function(data){
      const xData = {};
      if(typeof data['history_report_id'] !== 'undefined') xData['historyReportId'] = TypeTransformer.to('number')(data['history_report_id']);
      if(typeof data['history_type'] !== 'undefined') xData['historyType'] = TypeTransformer.to('string')(data['history_type']);
      if(typeof data['created'] !== 'undefined') xData['created'] = TypeTransformer.to('Date')(data['created']);
      if(typeof data['format'] !== 'undefined') xData['format'] = TypeTransformer.to('string')(data['format']);
      if(typeof data['completed'] !== 'undefined') xData['completed'] = TypeTransformer.to('Date')(data['completed']);
      if(typeof data['file_name'] !== 'undefined') xData['fileName'] = TypeTransformer.to('string')(data['file_name']);
      if(typeof data['file_size'] !== 'undefined') xData['fileSize'] = TypeTransformer.to('number')(data['file_size']);
      if(typeof data['download_size'] !== 'undefined') xData['downloadSize'] = TypeTransformer.to('number')(data['download_size']);
      if(typeof data['download_count'] !== 'undefined') xData['downloadCount'] = TypeTransformer.to('number')(data['download_count']);
      if(typeof data['last_downloaded'] !== 'undefined') xData['lastDownloaded'] = TypeTransformer.to('Date')(data['last_downloaded']);
      if(typeof data['store_until'] !== 'undefined') xData['storeUntil'] = TypeTransformer.to('Date')(data['store_until']);
      if(typeof data['error'] !== 'undefined') xData['error'] = TypeTransformer.to('APIError')(data['error']);
      if(typeof data['filters'] !== 'undefined') xData['filters'] = TypeTransformer.to('any')(data['filters']);
      if(typeof data['calculated_data'] !== 'undefined') xData['calculatedData'] = TypeTransformer.to('any')(data['calculated_data']);  
      return xData;
},
    'CalculatedCallHistoryDataType': function(data){
      const xData = {};
      if(typeof data['session_count'] !== 'undefined') xData['sessionCount'] = TypeTransformer.to('number')(data['session_count']);
      if(typeof data['total_session_count'] !== 'undefined') xData['totalSessionCount'] = TypeTransformer.to('number')(data['total_session_count']);
      if(typeof data['timezone'] !== 'undefined') xData['timezone'] = TypeTransformer.to('string')(data['timezone']);  
      return xData;
},
    'CalculatedTransactionHistoryDataType': function(data){
      const xData = {};
      if(typeof data['transaction_count'] !== 'undefined') xData['transactionCount'] = TypeTransformer.to('number')(data['transaction_count']);
      if(typeof data['total_transaction_count'] !== 'undefined') xData['totalTransactionCount'] = TypeTransformer.to('number')(data['total_transaction_count']);
      if(typeof data['start_balance'] !== 'undefined') xData['startBalance'] = TypeTransformer.to('string')(data['start_balance']);
      if(typeof data['end_balance'] !== 'undefined') xData['endBalance'] = TypeTransformer.to('string')(data['end_balance']);
      if(typeof data['account_id'] !== 'undefined') xData['accountId'] = TypeTransformer.to('number')(data['account_id']);
      if(typeof data['user_id'] !== 'undefined') xData['userId'] = TypeTransformer.to('number')(data['user_id']);
      if(typeof data['user_name'] !== 'undefined') xData['userName'] = TypeTransformer.to('number')(data['user_name']);
      if(typeof data['timezone'] !== 'undefined') xData['timezone'] = TypeTransformer.to('string')(data['timezone']);  
      return xData;
},
    'ACDSessionInfoType': function(data){
      const xData = {};
      if(typeof data['acd_session_history_id'] !== 'undefined') xData['acdSessionHistoryId'] = TypeTransformer.to('number')(data['acd_session_history_id']);
      if(typeof data['acd_request_id'] !== 'undefined') xData['acdRequestId'] = TypeTransformer.to('string')(data['acd_request_id']);
      if(typeof data['account_id'] !== 'undefined') xData['accountId'] = TypeTransformer.to('number')(data['account_id']);
      if(typeof data['begin_time'] !== 'undefined') xData['beginTime'] = TypeTransformer.to('Date')(data['begin_time']);
      if(typeof data['priority'] !== 'undefined') xData['priority'] = TypeTransformer.to('number')(data['priority']);
      if(typeof data['acd_queue_id'] !== 'undefined') xData['acdQueueId'] = TypeTransformer.to('number')(data['acd_queue_id']);
      if(typeof data['user_id'] !== 'undefined') xData['userId'] = TypeTransformer.to('number')(data['user_id']);
      if(typeof data['waiting_duration'] !== 'undefined') xData['waitingDuration'] = TypeTransformer.to('number')(data['waiting_duration']);
      if(typeof data['in_service_duration'] !== 'undefined') xData['inServiceDuration'] = TypeTransformer.to('number')(data['in_service_duration']);
      if(typeof data['after_service_duration'] !== 'undefined') xData['afterServiceDuration'] = TypeTransformer.to('number')(data['after_service_duration']);
      if(typeof data['events'] !== 'undefined') xData['events'] = TypeTransformer.to('ACDSessionEventInfo[]')(data['events']);  
      return xData;
},
    'ACDSessionEventInfoType': function(data){
      const xData = {};
      if(typeof data['acd_session_event_id'] !== 'undefined') xData['acdSessionEventId'] = TypeTransformer.to('number')(data['acd_session_event_id']);
      if(typeof data['time'] !== 'undefined') xData['time'] = TypeTransformer.to('Date')(data['time']);
      if(typeof data['type'] !== 'undefined') xData['type'] = TypeTransformer.to('string')(data['type']);
      if(typeof data['user_id'] !== 'undefined') xData['userId'] = TypeTransformer.to('number')(data['user_id']);
      if(typeof data['custom_data'] !== 'undefined') xData['customData'] = TypeTransformer.to('string')(data['custom_data']);  
      return xData;
},
    'QueueInfoType': function(data){
      const xData = {};
      if(typeof data['acd_queue_id'] !== 'undefined') xData['acdQueueId'] = TypeTransformer.to('number')(data['acd_queue_id']);
      if(typeof data['acd_queue_name'] !== 'undefined') xData['acdQueueName'] = TypeTransformer.to('string')(data['acd_queue_name']);
      if(typeof data['application_id'] !== 'undefined') xData['applicationId'] = TypeTransformer.to('number')(data['application_id']);
      if(typeof data['acd_queue_priority'] !== 'undefined') xData['acdQueuePriority'] = TypeTransformer.to('number')(data['acd_queue_priority']);
      if(typeof data['service_probability'] !== 'undefined') xData['serviceProbability'] = TypeTransformer.to('number')(data['service_probability']);
      if(typeof data['auto_binding'] !== 'undefined') xData['autoBinding'] = TypeTransformer.to('boolean')(data['auto_binding']);
      if(typeof data['max_waiting_time'] !== 'undefined') xData['maxWaitingTime'] = TypeTransformer.to('number')(data['max_waiting_time']);
      if(typeof data['max_queue_size'] !== 'undefined') xData['maxQueueSize'] = TypeTransformer.to('number')(data['max_queue_size']);
      if(typeof data['average_service_time'] !== 'undefined') xData['averageServiceTime'] = TypeTransformer.to('number')(data['average_service_time']);
      if(typeof data['created'] !== 'undefined') xData['created'] = TypeTransformer.to('Date')(data['created']);
      if(typeof data['modified'] !== 'undefined') xData['modified'] = TypeTransformer.to('Date')(data['modified']);
      if(typeof data['deleted'] !== 'undefined') xData['deleted'] = TypeTransformer.to('Date')(data['deleted']);
      if(typeof data['users'] !== 'undefined') xData['users'] = TypeTransformer.to('QueueUsers[]')(data['users']);
      if(typeof data['skills'] !== 'undefined') xData['skills'] = TypeTransformer.to('QueueSkills[]')(data['skills']);
      if(typeof data['sl_thresholds'] !== 'undefined') xData['slThresholds'] = TypeTransformer.to('number[]')(data['sl_thresholds']);  
      return xData;
},
    'QueueSkills': function(data){
      const xData = {};
      if(typeof data['skill_id'] !== 'undefined') xData['skillId'] = TypeTransformer.to('number')(data['skill_id']);
      if(typeof data['skill_name'] !== 'undefined') xData['skillName'] = TypeTransformer.to('string')(data['skill_name']);  
      return xData;
},
    'QueueUsers': function(data){
      const xData = {};
      if(typeof data['user_id'] !== 'undefined') xData['userId'] = TypeTransformer.to('number')(data['user_id']);  
      return xData;
},
    'ACDStateType': function(data){
      const xData = {};
      if(typeof data['acd_queues'] !== 'undefined') xData['acdQueues'] = TypeTransformer.to('ACDQueueState[]')(data['acd_queues']);  
      return xData;
},
    'ACDOperatorAggregationGroupType': function(data){
      const xData = {};
      if(typeof data['user_id'] !== 'undefined') xData['userId'] = TypeTransformer.to('string')(data['user_id']);
      if(typeof data['date'] !== 'undefined') xData['date'] = TypeTransformer.to('Date')(data['date']);
      if(typeof data['hour'] !== 'undefined') xData['hour'] = TypeTransformer.to('number')(data['hour']);
      if(typeof data['statistics'] !== 'undefined') xData['statistics'] = TypeTransformer.to('ACDOperatorStatistics[]')(data['statistics']);  
      return xData;
},
    'ACDOperatorStatusAggregationGroupType': function(data){
      const xData = {};
      if(typeof data['user_id'] !== 'undefined') xData['userId'] = TypeTransformer.to('string')(data['user_id']);
      if(typeof data['date'] !== 'undefined') xData['date'] = TypeTransformer.to('Date')(data['date']);
      if(typeof data['hour'] !== 'undefined') xData['hour'] = TypeTransformer.to('number')(data['hour']);
      if(typeof data['statistics'] !== 'undefined') xData['statistics'] = TypeTransformer.to('ACDOperatorStatusStatistics[]')(data['statistics']);  
      return xData;
},
    'ACDOperatorStatisticsType': function(data){
      const xData = {};
      if(typeof data['user_id'] !== 'undefined') xData['userId'] = TypeTransformer.to('string')(data['user_id']);
      if(typeof data['date'] !== 'undefined') xData['date'] = TypeTransformer.to('Date')(data['date']);
      if(typeof data['hour'] !== 'undefined') xData['hour'] = TypeTransformer.to('number')(data['hour']);
      if(typeof data['SA'] !== 'undefined') xData['SA'] = TypeTransformer.to('ACDStatisticsItem')(data['SA']);
      if(typeof data['TT'] !== 'undefined') xData['TT'] = TypeTransformer.to('ACDStatisticsItem')(data['TT']);
      if(typeof data['ACW'] !== 'undefined') xData['ACW'] = TypeTransformer.to('ACDStatisticsItem')(data['ACW']);
      if(typeof data['HT'] !== 'undefined') xData['HT'] = TypeTransformer.to('ACDStatisticsItem')(data['HT']);
      if(typeof data['AC'] !== 'undefined') xData['AC'] = TypeTransformer.to('number')(data['AC']);
      if(typeof data['UAC'] !== 'undefined') xData['UAC'] = TypeTransformer.to('number')(data['UAC']);
      if(typeof data['TDT'] !== 'undefined') xData['TDT'] = TypeTransformer.to('number')(data['TDT']);
      if(typeof data['THT'] !== 'undefined') xData['THT'] = TypeTransformer.to('number')(data['THT']);
      if(typeof data['TTT'] !== 'undefined') xData['TTT'] = TypeTransformer.to('number')(data['TTT']);
      if(typeof data['TACW'] !== 'undefined') xData['TACW'] = TypeTransformer.to('number')(data['TACW']);  
      return xData;
},
    'ACDOperatorStatusStatisticsType': function(data){
      const xData = {};
      if(typeof data['user_id'] !== 'undefined') xData['userId'] = TypeTransformer.to('string')(data['user_id']);
      if(typeof data['date'] !== 'undefined') xData['date'] = TypeTransformer.to('Date')(data['date']);
      if(typeof data['hour'] !== 'undefined') xData['hour'] = TypeTransformer.to('number')(data['hour']);
      if(typeof data['acd_status'] !== 'undefined') xData['acdStatus'] = TypeTransformer.to('ACDOperatorStatusStatisticsDetail[]')(data['acd_status']);  
      return xData;
},
    'ACDOperatorStatusStatisticsDetail': function(data){
      const xData = {};
      if(typeof data['OFFLINE'] !== 'undefined') xData['OFFLINE'] = TypeTransformer.to('ACDStatisticsItem')(data['OFFLINE']);
      if(typeof data['ONLINE'] !== 'undefined') xData['ONLINE'] = TypeTransformer.to('ACDStatisticsItem')(data['ONLINE']);
      if(typeof data['READY'] !== 'undefined') xData['READY'] = TypeTransformer.to('ACDStatisticsItem')(data['READY']);
      if(typeof data['BANNED'] !== 'undefined') xData['BANNED'] = TypeTransformer.to('ACDStatisticsItem')(data['BANNED']);
      if(typeof data['IN_SERVICE'] !== 'undefined') xData['INSERVICE'] = TypeTransformer.to('ACDStatisticsItem')(data['IN_SERVICE']);
      if(typeof data['AFTER_SERVICE'] !== 'undefined') xData['AFTERSERVICE'] = TypeTransformer.to('ACDStatisticsItem')(data['AFTER_SERVICE']);
      if(typeof data['TIMEOUT'] !== 'undefined') xData['TIMEOUT'] = TypeTransformer.to('ACDStatisticsItem')(data['TIMEOUT']);
      if(typeof data['DND'] !== 'undefined') xData['DND'] = TypeTransformer.to('ACDStatisticsItem')(data['DND']);  
      return xData;
},
    'ACDQueueStatisticsType': function(data){
      const xData = {};
      if(typeof data['date'] !== 'undefined') xData['date'] = TypeTransformer.to('Date')(data['date']);
      if(typeof data['hour'] !== 'undefined') xData['hour'] = TypeTransformer.to('number')(data['hour']);
      if(typeof data['WT'] !== 'undefined') xData['WT'] = TypeTransformer.to('ACDStatisticsItem')(data['WT']);
      if(typeof data['SA'] !== 'undefined') xData['SA'] = TypeTransformer.to('ACDStatisticsItem')(data['SA']);
      if(typeof data['AT'] !== 'undefined') xData['AT'] = TypeTransformer.to('ACDStatisticsItem')(data['AT']);
      if(typeof data['HT'] !== 'undefined') xData['HT'] = TypeTransformer.to('ACDStatisticsItem')(data['HT']);
      if(typeof data['TT'] !== 'undefined') xData['TT'] = TypeTransformer.to('ACDStatisticsItem')(data['TT']);
      if(typeof data['ACW'] !== 'undefined') xData['ACW'] = TypeTransformer.to('ACDStatisticsItem')(data['ACW']);
      if(typeof data['QL'] !== 'undefined') xData['QL'] = TypeTransformer.to('ACDStatisticsItem')(data['QL']);
      if(typeof data['TC'] !== 'undefined') xData['TC'] = TypeTransformer.to('number')(data['TC']);
      if(typeof data['AC'] !== 'undefined') xData['AC'] = TypeTransformer.to('ACDStatisticsCalls[]')(data['AC']);
      if(typeof data['UAC'] !== 'undefined') xData['UAC'] = TypeTransformer.to('ACDStatisticsCalls[]')(data['UAC']);
      if(typeof data['RC'] !== 'undefined') xData['RC'] = TypeTransformer.to('ACDStatisticsCalls[]')(data['RC']);
      if(typeof data['SL'] !== 'undefined') xData['SL'] = TypeTransformer.to('ACDQueueStatisticsServiceLevel[]')(data['SL']);
      if(typeof data['TWT'] !== 'undefined') xData['TWT'] = TypeTransformer.to('number')(data['TWT']);
      if(typeof data['TST'] !== 'undefined') xData['TST'] = TypeTransformer.to('number')(data['TST']);
      if(typeof data['TAT'] !== 'undefined') xData['TAT'] = TypeTransformer.to('number')(data['TAT']);
      if(typeof data['THT'] !== 'undefined') xData['THT'] = TypeTransformer.to('number')(data['THT']);
      if(typeof data['TTT'] !== 'undefined') xData['TTT'] = TypeTransformer.to('number')(data['TTT']);
      if(typeof data['TACW'] !== 'undefined') xData['TACW'] = TypeTransformer.to('number')(data['TACW']);  
      return xData;
},
    'ACDQueueStatisticsServiceLevelType': function(data){
      const xData = {};
      if(typeof data['acceptable_waiting_time'] !== 'undefined') xData['acceptableWaitingTime'] = TypeTransformer.to('number')(data['acceptable_waiting_time']);
      if(typeof data['call_count'] !== 'undefined') xData['callCount'] = TypeTransformer.to('number')(data['call_count']);
      if(typeof data['service_level'] !== 'undefined') xData['serviceLevel'] = TypeTransformer.to('number')(data['service_level']);  
      return xData;
},
    'ACDStatisticsItemType': function(data){
      const xData = {};
      if(typeof data['min'] !== 'undefined') xData['min'] = TypeTransformer.to('number')(data['min']);
      if(typeof data['avg'] !== 'undefined') xData['avg'] = TypeTransformer.to('number')(data['avg']);
      if(typeof data['max'] !== 'undefined') xData['max'] = TypeTransformer.to('number')(data['max']);
      if(typeof data['count'] !== 'undefined') xData['count'] = TypeTransformer.to('number')(data['count']);
      if(typeof data['sum'] !== 'undefined') xData['sum'] = TypeTransformer.to('number')(data['sum']);  
      return xData;
},
    'ACDStatisticsCalls': function(data){
      const xData = {};
      if(typeof data['count'] !== 'undefined') xData['count'] = TypeTransformer.to('number')(data['count']);
      if(typeof data['percent'] !== 'undefined') xData['percent'] = TypeTransformer.to('number')(data['percent']);  
      return xData;
},
    'ACDQueueStateType': function(data){
      const xData = {};
      if(typeof data['acd_queue_id'] !== 'undefined') xData['acdQueueId'] = TypeTransformer.to('number')(data['acd_queue_id']);
      if(typeof data['ready_operators'] !== 'undefined') xData['readyOperators'] = TypeTransformer.to('ACDReadyOperatorState[]')(data['ready_operators']);
      if(typeof data['ready_operators_count'] !== 'undefined') xData['readyOperatorsCount'] = TypeTransformer.to('number')(data['ready_operators_count']);
      if(typeof data['locked_operators'] !== 'undefined') xData['lockedOperators'] = TypeTransformer.to('ACDLockedOperatorState[]')(data['locked_operators']);
      if(typeof data['locked_operators_count'] !== 'undefined') xData['lockedOperatorsCount'] = TypeTransformer.to('number')(data['locked_operators_count']);
      if(typeof data['after_service_operators'] !== 'undefined') xData['afterServiceOperators'] = TypeTransformer.to('ACDAfterServiceOperatorState[]')(data['after_service_operators']);
      if(typeof data['after_service_operator_count'] !== 'undefined') xData['afterServiceOperatorCount'] = TypeTransformer.to('number')(data['after_service_operator_count']);
      if(typeof data['servicing_calls'] !== 'undefined') xData['servicingCalls'] = TypeTransformer.to('ACDServicingCallState[]')(data['servicing_calls']);
      if(typeof data['waiting_calls'] !== 'undefined') xData['waitingCalls'] = TypeTransformer.to('ACDWaitingCallState[]')(data['waiting_calls']);  
      return xData;
},
    'ACDReadyOperatorStateType': function(data){
      const xData = {};
      if(typeof data['user_id'] !== 'undefined') xData['userId'] = TypeTransformer.to('number')(data['user_id']);
      if(typeof data['user_name'] !== 'undefined') xData['userName'] = TypeTransformer.to('string')(data['user_name']);
      if(typeof data['user_display_name'] !== 'undefined') xData['userDisplayName'] = TypeTransformer.to('string')(data['user_display_name']);
      if(typeof data['idle_duration'] !== 'undefined') xData['idleDuration'] = TypeTransformer.to('number')(data['idle_duration']);  
      return xData;
},
    'ACDLockedOperatorStateType': function(data){
      const xData = {};
      if(typeof data['user_id'] !== 'undefined') xData['userId'] = TypeTransformer.to('number')(data['user_id']);
      if(typeof data['user_name'] !== 'undefined') xData['userName'] = TypeTransformer.to('string')(data['user_name']);
      if(typeof data['user_display_name'] !== 'undefined') xData['userDisplayName'] = TypeTransformer.to('string')(data['user_display_name']);
      if(typeof data['unreached'] !== 'undefined') xData['unreached'] = TypeTransformer.to('Date')(data['unreached']);
      if(typeof data['locks'] !== 'undefined') xData['locks'] = TypeTransformer.to('ACDLock[]')(data['locks']);
      if(typeof data['acd_calls'] !== 'undefined') xData['acdCalls'] = TypeTransformer.to('ACDOperatorCall[]')(data['acd_calls']);
      if(typeof data['status'] !== 'undefined') xData['status'] = TypeTransformer.to('string')(data['status']);  
      return xData;
},
    'ACDAfterServiceOperatorStateType': function(data){
      const xData = {};
      if(typeof data['user_id'] !== 'undefined') xData['userId'] = TypeTransformer.to('number')(data['user_id']);
      if(typeof data['user_name'] !== 'undefined') xData['userName'] = TypeTransformer.to('string')(data['user_name']);
      if(typeof data['user_display_name'] !== 'undefined') xData['userDisplayName'] = TypeTransformer.to('string')(data['user_display_name']);
      if(typeof data['status'] !== 'undefined') xData['status'] = TypeTransformer.to('string')(data['status']);  
      return xData;
},
    'ACDLock': function(data){
      const xData = {};
      if(typeof data['id'] !== 'undefined') xData['id'] = TypeTransformer.to('string')(data['id']);
      if(typeof data['created'] !== 'undefined') xData['created'] = TypeTransformer.to('Date')(data['created']);  
      return xData;
},
    'ACDOperatorCall': function(data){
      const xData = {};
      if(typeof data['acd_session_history_id'] !== 'undefined') xData['acdSessionHistoryId'] = TypeTransformer.to('number')(data['acd_session_history_id']);
      if(typeof data['acd_request_id'] !== 'undefined') xData['acdRequestId'] = TypeTransformer.to('string')(data['acd_request_id']);
      if(typeof data['acd_queue_id'] !== 'undefined') xData['acdQueueId'] = TypeTransformer.to('number')(data['acd_queue_id']);
      if(typeof data['acd_queue_name'] !== 'undefined') xData['acdQueueName'] = TypeTransformer.to('string')(data['acd_queue_name']);
      if(typeof data['callerid'] !== 'undefined') xData['callerid'] = TypeTransformer.to('string')(data['callerid']);
      if(typeof data['begin_time'] !== 'undefined') xData['beginTime'] = TypeTransformer.to('Date')(data['begin_time']);
      if(typeof data['submitted'] !== 'undefined') xData['submitted'] = TypeTransformer.to('Date')(data['submitted']);  
      return xData;
},
    'ACDServicingCallStateType': function(data){
      const xData = {};
      if(typeof data['user_id'] !== 'undefined') xData['userId'] = TypeTransformer.to('number')(data['user_id']);
      if(typeof data['user_name'] !== 'undefined') xData['userName'] = TypeTransformer.to('string')(data['user_name']);
      if(typeof data['user_display_name'] !== 'undefined') xData['userDisplayName'] = TypeTransformer.to('string')(data['user_display_name']);
      if(typeof data['priority'] !== 'undefined') xData['priority'] = TypeTransformer.to('number')(data['priority']);
      if(typeof data['callerid'] !== 'undefined') xData['callerid'] = TypeTransformer.to('string')(data['callerid']);
      if(typeof data['begin_time'] !== 'undefined') xData['beginTime'] = TypeTransformer.to('Date')(data['begin_time']);
      if(typeof data['waiting_time'] !== 'undefined') xData['waitingTime'] = TypeTransformer.to('number')(data['waiting_time']);
      if(typeof data['acd_session_history_id'] !== 'undefined') xData['acdSessionHistoryId'] = TypeTransformer.to('number')(data['acd_session_history_id']);  
      return xData;
},
    'ACDWaitingCallStateType': function(data){
      const xData = {};
      if(typeof data['user_id'] !== 'undefined') xData['userId'] = TypeTransformer.to('number')(data['user_id']);
      if(typeof data['user_name'] !== 'undefined') xData['userName'] = TypeTransformer.to('string')(data['user_name']);
      if(typeof data['user_display_name'] !== 'undefined') xData['userDisplayName'] = TypeTransformer.to('string')(data['user_display_name']);
      if(typeof data['priority'] !== 'undefined') xData['priority'] = TypeTransformer.to('number')(data['priority']);
      if(typeof data['callerid'] !== 'undefined') xData['callerid'] = TypeTransformer.to('string')(data['callerid']);
      if(typeof data['begin_time'] !== 'undefined') xData['beginTime'] = TypeTransformer.to('Date')(data['begin_time']);
      if(typeof data['waiting_time'] !== 'undefined') xData['waitingTime'] = TypeTransformer.to('number')(data['waiting_time']);
      if(typeof data['minutes_to_submit'] !== 'undefined') xData['minutesToSubmit'] = TypeTransformer.to('number')(data['minutes_to_submit']);
      if(typeof data['acd_session_history_id'] !== 'undefined') xData['acdSessionHistoryId'] = TypeTransformer.to('number')(data['acd_session_history_id']);  
      return xData;
},
    'NewPhoneInfoType': function(data){
      const xData = {};
      if(typeof data['phone_id'] !== 'undefined') xData['phoneId'] = TypeTransformer.to('number')(data['phone_id']);
      if(typeof data['phone_number'] !== 'undefined') xData['phoneNumber'] = TypeTransformer.to('string')(data['phone_number']);
      if(typeof data['phone_price'] !== 'undefined') xData['phonePrice'] = TypeTransformer.to('number')(data['phone_price']);
      if(typeof data['phone_installation_price'] !== 'undefined') xData['phoneInstallationPrice'] = TypeTransformer.to('number')(data['phone_installation_price']);
      if(typeof data['phone_country_code'] !== 'undefined') xData['phoneCountryCode'] = TypeTransformer.to('string')(data['phone_country_code']);
      if(typeof data['phone_period'] !== 'undefined') xData['phonePeriod'] = TypeTransformer.to('string')(data['phone_period']);
      if(typeof data['phone_category_name'] !== 'undefined') xData['phoneCategoryName'] = TypeTransformer.to('string')(data['phone_category_name']);
      if(typeof data['phone_region_name'] !== 'undefined') xData['phoneRegionName'] = TypeTransformer.to('string')(data['phone_region_name']);  
      return xData;
},
    'AttachedPhoneInfoType': function(data){
      const xData = {};
      if(typeof data['phone_id'] !== 'undefined') xData['phoneId'] = TypeTransformer.to('number')(data['phone_id']);
      if(typeof data['phone_number'] !== 'undefined') xData['phoneNumber'] = TypeTransformer.to('string')(data['phone_number']);
      if(typeof data['phone_price'] !== 'undefined') xData['phonePrice'] = TypeTransformer.to('number')(data['phone_price']);
      if(typeof data['phone_country_code'] !== 'undefined') xData['phoneCountryCode'] = TypeTransformer.to('string')(data['phone_country_code']);
      if(typeof data['phone_next_renewal'] !== 'undefined') xData['phoneNextRenewal'] = TypeTransformer.to('Date')(data['phone_next_renewal']);
      if(typeof data['phone_purchase_date'] !== 'undefined') xData['phonePurchaseDate'] = TypeTransformer.to('Date')(data['phone_purchase_date']);
      if(typeof data['deactivated'] !== 'undefined') xData['deactivated'] = TypeTransformer.to('boolean')(data['deactivated']);
      if(typeof data['canceled'] !== 'undefined') xData['canceled'] = TypeTransformer.to('boolean')(data['canceled']);
      if(typeof data['auto_charge'] !== 'undefined') xData['autoCharge'] = TypeTransformer.to('boolean')(data['auto_charge']);
      if(typeof data['application_id'] !== 'undefined') xData['applicationId'] = TypeTransformer.to('number')(data['application_id']);
      if(typeof data['application_name'] !== 'undefined') xData['applicationName'] = TypeTransformer.to('string')(data['application_name']);
      if(typeof data['rule_id'] !== 'undefined') xData['ruleId'] = TypeTransformer.to('number')(data['rule_id']);
      if(typeof data['rule_name'] !== 'undefined') xData['ruleName'] = TypeTransformer.to('string')(data['rule_name']);
      if(typeof data['category_name'] !== 'undefined') xData['categoryName'] = TypeTransformer.to('string')(data['category_name']);
      if(typeof data['required_verification'] !== 'undefined') xData['requiredVerification'] = TypeTransformer.to('string')(data['required_verification']);
      if(typeof data['verification_status'] !== 'undefined') xData['verificationStatus'] = TypeTransformer.to('string')(data['verification_status']);
      if(typeof data['unverified_hold_until'] !== 'undefined') xData['unverifiedHoldUntil'] = TypeTransformer.to('Date')(data['unverified_hold_until']);
      if(typeof data['can_be_used'] !== 'undefined') xData['canBeUsed'] = TypeTransformer.to('boolean')(data['can_be_used']);
      if(typeof data['is_sms_supported'] !== 'undefined') xData['isSmsSupported'] = TypeTransformer.to('boolean')(data['is_sms_supported']);
      if(typeof data['is_sms_enabled'] !== 'undefined') xData['isSmsEnabled'] = TypeTransformer.to('boolean')(data['is_sms_enabled']);  
      return xData;
},
    'NewAttachedPhoneInfoType': function(data){
      const xData = {};
      if(typeof data['phone_id'] !== 'undefined') xData['phoneId'] = TypeTransformer.to('number')(data['phone_id']);
      if(typeof data['phone_number'] !== 'undefined') xData['phoneNumber'] = TypeTransformer.to('string')(data['phone_number']);
      if(typeof data['required_verification'] !== 'undefined') xData['requiredVerification'] = TypeTransformer.to('string')(data['required_verification']);
      if(typeof data['verification_status'] !== 'undefined') xData['verificationStatus'] = TypeTransformer.to('string')(data['verification_status']);
      if(typeof data['unverified_hold_until'] !== 'undefined') xData['unverifiedHoldUntil'] = TypeTransformer.to('Date')(data['unverified_hold_until']);  
      return xData;
},
    'PhoneNumberCountryInfoType': function(data){
      const xData = {};
      if(typeof data['country_code'] !== 'undefined') xData['countryCode'] = TypeTransformer.to('string')(data['country_code']);
      if(typeof data['phone_prefix'] !== 'undefined') xData['phonePrefix'] = TypeTransformer.to('string')(data['phone_prefix']);
      if(typeof data['can_list_phone_numbers'] !== 'undefined') xData['canListPhoneNumbers'] = TypeTransformer.to('boolean')(data['can_list_phone_numbers']);
      if(typeof data['phone_categories'] !== 'undefined') xData['phoneCategories'] = TypeTransformer.to('PhoneNumberCountryCategoryInfo[]')(data['phone_categories']);  
      return xData;
},
    'PhoneNumberCountryCategoryInfoType': function(data){
      const xData = {};
      if(typeof data['phone_category_name'] !== 'undefined') xData['phoneCategoryName'] = TypeTransformer.to('string')(data['phone_category_name']);
      if(typeof data['country_has_states'] !== 'undefined') xData['countryHasStates'] = TypeTransformer.to('boolean')(data['country_has_states']);  
      return xData;
},
    'PhoneNumberCountryStateInfoType': function(data){
      const xData = {};
      if(typeof data['country_state'] !== 'undefined') xData['countryState'] = TypeTransformer.to('string')(data['country_state']);
      if(typeof data['country_state_name'] !== 'undefined') xData['countryStateName'] = TypeTransformer.to('string')(data['country_state_name']);  
      return xData;
},
    'PhoneNumberCountryRegionInfoType': function(data){
      const xData = {};
      if(typeof data['phone_region_id'] !== 'undefined') xData['phoneRegionId'] = TypeTransformer.to('number')(data['phone_region_id']);
      if(typeof data['phone_region_name'] !== 'undefined') xData['phoneRegionName'] = TypeTransformer.to('string')(data['phone_region_name']);
      if(typeof data['phone_region_code'] !== 'undefined') xData['phoneRegionCode'] = TypeTransformer.to('string')(data['phone_region_code']);
      if(typeof data['phone_count'] !== 'undefined') xData['phoneCount'] = TypeTransformer.to('number')(data['phone_count']);
      if(typeof data['verification_status'] !== 'undefined') xData['verificationStatus'] = TypeTransformer.to('string')(data['verification_status']);
      if(typeof data['required_verification'] !== 'undefined') xData['requiredVerification'] = TypeTransformer.to('string')(data['required_verification']);
      if(typeof data['phone_price'] !== 'undefined') xData['phonePrice'] = TypeTransformer.to('number')(data['phone_price']);
      if(typeof data['phone_installation_price'] !== 'undefined') xData['phoneInstallationPrice'] = TypeTransformer.to('number')(data['phone_installation_price']);
      if(typeof data['phone_period'] !== 'undefined') xData['phonePeriod'] = TypeTransformer.to('string')(data['phone_period']);
      if(typeof data['is_need_regulation_address'] !== 'undefined') xData['isNeedRegulationAddress'] = TypeTransformer.to('boolean')(data['is_need_regulation_address']);
      if(typeof data['regulation_address_type'] !== 'undefined') xData['regulationAddressType'] = TypeTransformer.to('string')(data['regulation_address_type']);
      if(typeof data['is_sms_supported'] !== 'undefined') xData['isSmsSupported'] = TypeTransformer.to('boolean')(data['is_sms_supported']);
      if(typeof data['multiple_numbers_price'] !== 'undefined') xData['multipleNumbersPrice'] = TypeTransformer.to('MultipleNumbersPrice[]')(data['multiple_numbers_price']);  
      return xData;
},
    'MultipleNumbersPrice': function(data){
      const xData = {};
      if(typeof data['count'] !== 'undefined') xData['count'] = TypeTransformer.to('number')(data['count']);
      if(typeof data['price'] !== 'undefined') xData['price'] = TypeTransformer.to('number')(data['price']);
      if(typeof data['installation_price'] !== 'undefined') xData['installationPrice'] = TypeTransformer.to('number')(data['installation_price']);  
      return xData;
},
    'CallerIDInfoType': function(data){
      const xData = {};
      if(typeof data['callerid_id'] !== 'undefined') xData['calleridId'] = TypeTransformer.to('number')(data['callerid_id']);
      if(typeof data['callerid_number'] !== 'undefined') xData['calleridNumber'] = TypeTransformer.to('string')(data['callerid_number']);
      if(typeof data['active'] !== 'undefined') xData['active'] = TypeTransformer.to('boolean')(data['active']);
      if(typeof data['code_entering_attempts_left'] !== 'undefined') xData['codeEnteringAttemptsLeft'] = TypeTransformer.to('number')(data['code_entering_attempts_left']);
      if(typeof data['verification_call_attempts_left'] !== 'undefined') xData['verificationCallAttemptsLeft'] = TypeTransformer.to('number')(data['verification_call_attempts_left']);
      if(typeof data['verified_until'] !== 'undefined') xData['verifiedUntil'] = TypeTransformer.to('Date')(data['verified_until']);  
      return xData;
},
    'ContactInfoType': function(data){
      const xData = {};
      if(typeof data['contact_id'] !== 'undefined') xData['contactId'] = TypeTransformer.to('number')(data['contact_id']);
      if(typeof data['contact_type'] !== 'undefined') xData['contactType'] = TypeTransformer.to('string')(data['contact_type']);
      if(typeof data['contact_data'] !== 'undefined') xData['contactData'] = TypeTransformer.to('string')(data['contact_data']);
      if(typeof data['is_persistent'] !== 'undefined') xData['isPersistent'] = TypeTransformer.to('boolean')(data['is_persistent']);
      if(typeof data['description'] !== 'undefined') xData['description'] = TypeTransformer.to('string')(data['description']);
      if(typeof data['next_verification_after_sec'] !== 'undefined') xData['nextVerificationAfterSec'] = TypeTransformer.to('number')(data['next_verification_after_sec']);
      if(typeof data['verified'] !== 'undefined') xData['verified'] = TypeTransformer.to('Date')(data['verified']);
      if(typeof data['notification_group'] !== 'undefined') xData['notificationGroup'] = TypeTransformer.to('string[]')(data['notification_group']);
      if(typeof data['created'] !== 'undefined') xData['created'] = TypeTransformer.to('Date')(data['created']);
      if(typeof data['modified'] !== 'undefined') xData['modified'] = TypeTransformer.to('Date')(data['modified']);  
      return xData;
},
    'ACDQueueOperatorInfoType': function(data){
      const xData = {};
      if(typeof data['acd_queue_id'] !== 'undefined') xData['acdQueueId'] = TypeTransformer.to('number')(data['acd_queue_id']);
      if(typeof data['acd_queue_name'] !== 'undefined') xData['acdQueueName'] = TypeTransformer.to('string')(data['acd_queue_name']);
      if(typeof data['auto_link'] !== 'undefined') xData['autoLink'] = TypeTransformer.to('boolean')(data['auto_link']);  
      return xData;
},
    'ClonedACDQueueType': function(data){
      const xData = {};
      if(typeof data['acd_queue_id'] !== 'undefined') xData['acdQueueId'] = TypeTransformer.to('number')(data['acd_queue_id']);
      if(typeof data['acd_queue_name'] !== 'undefined') xData['acdQueueName'] = TypeTransformer.to('string')(data['acd_queue_name']);  
      return xData;
},
    'SkillInfoType': function(data){
      const xData = {};
      if(typeof data['skill_id'] !== 'undefined') xData['skillId'] = TypeTransformer.to('number')(data['skill_id']);
      if(typeof data['skill_name'] !== 'undefined') xData['skillName'] = TypeTransformer.to('string')(data['skill_name']);  
      return xData;
},
    'ClonedACDSkillType': function(data){
      const xData = {};
      if(typeof data['skill_id'] !== 'undefined') xData['skillId'] = TypeTransformer.to('number')(data['skill_id']);
      if(typeof data['skill_name'] !== 'undefined') xData['skillName'] = TypeTransformer.to('string')(data['skill_name']);  
      return xData;
},
    'ExchangeRates': function(data){
      const xData = {};
      if(typeof data['RUR'] !== 'undefined') xData['RUR'] = TypeTransformer.to('number')(data['RUR']);
      if(typeof data['EUR'] !== 'undefined') xData['EUR'] = TypeTransformer.to('number')(data['EUR']);
      if(typeof data['USD'] !== 'undefined') xData['USD'] = TypeTransformer.to('number')(data['USD']);  
      return xData;
},
    'ResourcePrice': function(data){
      const xData = {};
      if(typeof data['resource_type'] !== 'undefined') xData['resourceType'] = TypeTransformer.to('string')(data['resource_type']);
      if(typeof data['price_groups'] !== 'undefined') xData['priceGroups'] = TypeTransformer.to('PriceGroup[]')(data['price_groups']);  
      return xData;
},
    'PriceGroup': function(data){
      const xData = {};
      if(typeof data['price_group_name'] !== 'undefined') xData['priceGroupName'] = TypeTransformer.to('string')(data['price_group_name']);
      if(typeof data['price_group_id'] !== 'undefined') xData['priceGroupId'] = TypeTransformer.to('number')(data['price_group_id']);
      if(typeof data['price'] !== 'undefined') xData['price'] = TypeTransformer.to('number')(data['price']);
      if(typeof data['num_resources_per_price'] !== 'undefined') xData['numResourcesPerPrice'] = TypeTransformer.to('number')(data['num_resources_per_price']);
      if(typeof data['quantum'] !== 'undefined') xData['quantum'] = TypeTransformer.to('number')(data['quantum']);
      if(typeof data['params'] !== 'undefined') xData['params'] = TypeTransformer.to('ResourceParams')(data['params']);  
      return xData;
},
    'ResourceParams': function(data){
      const xData = {};
      if(typeof data['allowed'] !== 'undefined') xData['allowed'] = TypeTransformer.to('string[]')(data['allowed']);
      if(typeof data['forbidden'] !== 'undefined') xData['forbidden'] = TypeTransformer.to('string[]')(data['forbidden']);
      if(typeof data['requested'] !== 'undefined') xData['requested'] = TypeTransformer.to('string[]')(data['requested']);  
      return xData;
},
    'CallListType': function(data){
      const xData = {};
      if(typeof data['list_id'] !== 'undefined') xData['listId'] = TypeTransformer.to('number')(data['list_id']);
      if(typeof data['list_name'] !== 'undefined') xData['listName'] = TypeTransformer.to('string')(data['list_name']);
      if(typeof data['priority'] !== 'undefined') xData['priority'] = TypeTransformer.to('number')(data['priority']);
      if(typeof data['rule_id'] !== 'undefined') xData['ruleId'] = TypeTransformer.to('number')(data['rule_id']);
      if(typeof data['max_simultaneous'] !== 'undefined') xData['maxSimultaneous'] = TypeTransformer.to('number')(data['max_simultaneous']);
      if(typeof data['num_attempts'] !== 'undefined') xData['numAttempts'] = TypeTransformer.to('number')(data['num_attempts']);
      if(typeof data['dt_submit'] !== 'undefined') xData['dtSubmit'] = TypeTransformer.to('Date')(data['dt_submit']);
      if(typeof data['dt_complete'] !== 'undefined') xData['dtComplete'] = TypeTransformer.to('Date')(data['dt_complete']);
      if(typeof data['interval_seconds'] !== 'undefined') xData['intervalSeconds'] = TypeTransformer.to('number')(data['interval_seconds']);
      if(typeof data['status'] !== 'undefined') xData['status'] = TypeTransformer.to('string')(data['status']);  
      return xData;
},
    'CallListDetailType': function(data){
      const xData = {};
      if(typeof data['list_id'] !== 'undefined') xData['listId'] = TypeTransformer.to('number')(data['list_id']);
      if(typeof data['custom_data'] !== 'undefined') xData['customData'] = TypeTransformer.to('string')(data['custom_data']);
      if(typeof data['start_execution_time'] !== 'undefined') xData['startExecutionTime'] = TypeTransformer.to('string')(data['start_execution_time']);
      if(typeof data['finish_execution_time'] !== 'undefined') xData['finishExecutionTime'] = TypeTransformer.to('string')(data['finish_execution_time']);
      if(typeof data['result_data'] !== 'undefined') xData['resultData'] = TypeTransformer.to('string')(data['result_data']);
      if(typeof data['last_attempt'] !== 'undefined') xData['lastAttempt'] = TypeTransformer.to('string')(data['last_attempt']);
      if(typeof data['attempts_left'] !== 'undefined') xData['attemptsLeft'] = TypeTransformer.to('number')(data['attempts_left']);
      if(typeof data['status_id'] !== 'undefined') xData['statusId'] = TypeTransformer.to('number')(data['status_id']);
      if(typeof data['status'] !== 'undefined') xData['status'] = TypeTransformer.to('string')(data['status']);  
      return xData;
},
    'SIPRegistrationType': function(data){
      const xData = {};
      if(typeof data['sip_registration_id'] !== 'undefined') xData['sipRegistrationId'] = TypeTransformer.to('number')(data['sip_registration_id']);
      if(typeof data['sip_username'] !== 'undefined') xData['sipUsername'] = TypeTransformer.to('string')(data['sip_username']);
      if(typeof data['proxy'] !== 'undefined') xData['proxy'] = TypeTransformer.to('string')(data['proxy']);
      if(typeof data['last_updated'] !== 'undefined') xData['lastUpdated'] = TypeTransformer.to('number')(data['last_updated']);
      if(typeof data['auth_user'] !== 'undefined') xData['authUser'] = TypeTransformer.to('string')(data['auth_user']);
      if(typeof data['outbound_proxy'] !== 'undefined') xData['outboundProxy'] = TypeTransformer.to('string')(data['outbound_proxy']);
      if(typeof data['successful'] !== 'undefined') xData['successful'] = TypeTransformer.to('boolean')(data['successful']);
      if(typeof data['status_code'] !== 'undefined') xData['statusCode'] = TypeTransformer.to('number')(data['status_code']);
      if(typeof data['error_message'] !== 'undefined') xData['errorMessage'] = TypeTransformer.to('string')(data['error_message']);
      if(typeof data['deactivated'] !== 'undefined') xData['deactivated'] = TypeTransformer.to('boolean')(data['deactivated']);
      if(typeof data['next_subscription_renewal'] !== 'undefined') xData['nextSubscriptionRenewal'] = TypeTransformer.to('Date')(data['next_subscription_renewal']);
      if(typeof data['purchase_date'] !== 'undefined') xData['purchaseDate'] = TypeTransformer.to('Date')(data['purchase_date']);
      if(typeof data['subscription_price'] !== 'undefined') xData['subscriptionPrice'] = TypeTransformer.to('string')(data['subscription_price']);
      if(typeof data['is_persistent'] !== 'undefined') xData['isPersistent'] = TypeTransformer.to('boolean')(data['is_persistent']);
      if(typeof data['user_id'] !== 'undefined') xData['userId'] = TypeTransformer.to('number')(data['user_id']);
      if(typeof data['user_name'] !== 'undefined') xData['userName'] = TypeTransformer.to('string')(data['user_name']);
      if(typeof data['application_id'] !== 'undefined') xData['applicationId'] = TypeTransformer.to('number')(data['application_id']);
      if(typeof data['application_name'] !== 'undefined') xData['applicationName'] = TypeTransformer.to('string')(data['application_name']);
      if(typeof data['rule_id'] !== 'undefined') xData['ruleId'] = TypeTransformer.to('number')(data['rule_id']);
      if(typeof data['rule_name'] !== 'undefined') xData['ruleName'] = TypeTransformer.to('string')(data['rule_name']);  
      return xData;
},
    'AdminRoleType': function(data){
      const xData = {};
      if(typeof data['admin_role_id'] !== 'undefined') xData['adminRoleId'] = TypeTransformer.to('number')(data['admin_role_id']);
      if(typeof data['admin_role_name'] !== 'undefined') xData['adminRoleName'] = TypeTransformer.to('string')(data['admin_role_name']);
      if(typeof data['admin_role_active'] !== 'undefined') xData['adminRoleActive'] = TypeTransformer.to('boolean')(data['admin_role_active']);
      if(typeof data['system_role'] !== 'undefined') xData['systemRole'] = TypeTransformer.to('boolean')(data['system_role']);
      if(typeof data['modified'] !== 'undefined') xData['modified'] = TypeTransformer.to('Date')(data['modified']);
      if(typeof data['allowed_entries'] !== 'undefined') xData['allowedEntries'] = TypeTransformer.to('string[]')(data['allowed_entries']);
      if(typeof data['denied_entries'] !== 'undefined') xData['deniedEntries'] = TypeTransformer.to('string[]')(data['denied_entries']);  
      return xData;
},
    'ClonedAdminRoleType': function(data){
      const xData = {};
      if(typeof data['admin_role_id'] !== 'undefined') xData['adminRoleId'] = TypeTransformer.to('number')(data['admin_role_id']);
      if(typeof data['admin_role_name'] !== 'undefined') xData['adminRoleName'] = TypeTransformer.to('string')(data['admin_role_name']);  
      return xData;
},
    'AdminUserType': function(data){
      const xData = {};
      if(typeof data['admin_user_id'] !== 'undefined') xData['adminUserId'] = TypeTransformer.to('number')(data['admin_user_id']);
      if(typeof data['admin_user_name'] !== 'undefined') xData['adminUserName'] = TypeTransformer.to('string')(data['admin_user_name']);
      if(typeof data['admin_user_display_name'] !== 'undefined') xData['adminUserDisplayName'] = TypeTransformer.to('string')(data['admin_user_display_name']);
      if(typeof data['admin_user_active'] !== 'undefined') xData['adminUserActive'] = TypeTransformer.to('boolean')(data['admin_user_active']);
      if(typeof data['modified'] !== 'undefined') xData['modified'] = TypeTransformer.to('Date')(data['modified']);
      if(typeof data['access_entries'] !== 'undefined') xData['accessEntries'] = TypeTransformer.to('string[]')(data['access_entries']);
      if(typeof data['admin_roles'] !== 'undefined') xData['adminRoles'] = TypeTransformer.to('AdminRole[]')(data['admin_roles']);  
      return xData;
},
    'ClonedAdminUserType': function(data){
      const xData = {};
      if(typeof data['admin_user_id'] !== 'undefined') xData['adminUserId'] = TypeTransformer.to('number')(data['admin_user_id']);
      if(typeof data['admin_user_name'] !== 'undefined') xData['adminUserName'] = TypeTransformer.to('string')(data['admin_user_name']);
      if(typeof data['admin_user_api_key'] !== 'undefined') xData['adminUserApiKey'] = TypeTransformer.to('string')(data['admin_user_api_key']);  
      return xData;
},
    'GetMoneyAmountToChargeResult': function(data){
      const xData = {};
      if(typeof data['amount'] !== 'undefined') xData['amount'] = TypeTransformer.to('number')(data['amount']);
      if(typeof data['min_amount'] !== 'undefined') xData['minAmount'] = TypeTransformer.to('number')(data['min_amount']);
      if(typeof data['bank_card_amount_usd'] !== 'undefined') xData['bankCardAmountUsd'] = TypeTransformer.to('number')(data['bank_card_amount_usd']);
      if(typeof data['min_bank_card_amount_usd'] !== 'undefined') xData['minBankCardAmountUsd'] = TypeTransformer.to('number')(data['min_bank_card_amount_usd']);
      if(typeof data['robokassa_amount_rub'] !== 'undefined') xData['robokassaAmountRub'] = TypeTransformer.to('number')(data['robokassa_amount_rub']);
      if(typeof data['min_robokassa_amount_rub'] !== 'undefined') xData['minRobokassaAmountRub'] = TypeTransformer.to('number')(data['min_robokassa_amount_rub']);
      if(typeof data['subscriptions'] !== 'undefined') xData['subscriptions'] = TypeTransformer.to('SubscriptionsToCharge[]')(data['subscriptions']);  
      return xData;
},
    'ChargeAccountResult': function(data){
      const xData = {};
      if(typeof data['charged_amount'] !== 'undefined') xData['chargedAmount'] = TypeTransformer.to('number')(data['charged_amount']);
      if(typeof data['phones'] !== 'undefined') xData['phones'] = TypeTransformer.to('ChargedPhone[]')(data['phones']);  
      return xData;
},
    'ChargedPhoneType': function(data){
      const xData = {};
      if(typeof data['phone_id'] !== 'undefined') xData['phoneId'] = TypeTransformer.to('number')(data['phone_id']);
      if(typeof data['phone_number'] !== 'undefined') xData['phoneNumber'] = TypeTransformer.to('string')(data['phone_number']);
      if(typeof data['deactivated'] !== 'undefined') xData['deactivated'] = TypeTransformer.to('boolean')(data['deactivated']);
      if(typeof data['is_charged'] !== 'undefined') xData['isCharged'] = TypeTransformer.to('boolean')(data['is_charged']);  
      return xData;
},
    'SubscriptionsToChargeType': function(data){
      const xData = {};
      if(typeof data['subscription_amount'] !== 'undefined') xData['subscriptionAmount'] = TypeTransformer.to('number')(data['subscription_amount']);
      if(typeof data['subscription_type'] !== 'undefined') xData['subscriptionType'] = TypeTransformer.to('string')(data['subscription_type']);
      if(typeof data['subscription_description'] !== 'undefined') xData['subscriptionDescription'] = TypeTransformer.to('string')(data['subscription_description']);
      if(typeof data['subscription_auto_charge'] !== 'undefined') xData['subscriptionAutoCharge'] = TypeTransformer.to('boolean')(data['subscription_auto_charge']);
      if(typeof data['subscription_next_renewal'] !== 'undefined') xData['subscriptionNextRenewal'] = TypeTransformer.to('Date')(data['subscription_next_renewal']);  
      return xData;
},
    'AuthorizedAccountIPType': function(data){
      const xData = {};
      if(typeof data['authorized_ip'] !== 'undefined') xData['authorizedIp'] = TypeTransformer.to('string')(data['authorized_ip']);
      if(typeof data['allowed'] !== 'undefined') xData['allowed'] = TypeTransformer.to('boolean')(data['allowed']);
      if(typeof data['created'] !== 'undefined') xData['created'] = TypeTransformer.to('Date')(data['created']);  
      return xData;
},
    'AccountVerificationDocument': function(data){
      const xData = {};
      if(typeof data['account_document_id'] !== 'undefined') xData['accountDocumentId'] = TypeTransformer.to('number')(data['account_document_id']);
      if(typeof data['is_individual'] !== 'undefined') xData['isIndividual'] = TypeTransformer.to('boolean')(data['is_individual']);
      if(typeof data['comment'] !== 'undefined') xData['comment'] = TypeTransformer.to('string')(data['comment']);
      if(typeof data['uploaded'] !== 'undefined') xData['uploaded'] = TypeTransformer.to('Date')(data['uploaded']);
      if(typeof data['account_document_status'] !== 'undefined') xData['accountDocumentStatus'] = TypeTransformer.to('string')(data['account_document_status']);  
      return xData;
},
    'AccountVerificationType': function(data){
      const xData = {};
      if(typeof data['verification_name'] !== 'undefined') xData['verificationName'] = TypeTransformer.to('string')(data['verification_name']);
      if(typeof data['verification_status'] !== 'undefined') xData['verificationStatus'] = TypeTransformer.to('string')(data['verification_status']);
      if(typeof data['unverified_hold_until'] !== 'undefined') xData['unverifiedHoldUntil'] = TypeTransformer.to('Date')(data['unverified_hold_until']);
      if(typeof data['documents'] !== 'undefined') xData['documents'] = TypeTransformer.to('AccountVerificationDocument[]')(data['documents']);  
      return xData;
},
    'AccountVerifications': function(data){
      const xData = {};
      if(typeof data['account_id'] !== 'undefined') xData['accountId'] = TypeTransformer.to('number')(data['account_id']);
      if(typeof data['verifications'] !== 'undefined') xData['verifications'] = TypeTransformer.to('AccountVerification[]')(data['verifications']);  
      return xData;
},
    'SubscriptionTemplateType': function(data){
      const xData = {};
      if(typeof data['subscription_template_id'] !== 'undefined') xData['subscriptionTemplateId'] = TypeTransformer.to('number')(data['subscription_template_id']);
      if(typeof data['installation_price'] !== 'undefined') xData['installationPrice'] = TypeTransformer.to('number')(data['installation_price']);
      if(typeof data['period'] !== 'undefined') xData['period'] = TypeTransformer.to('string')(data['period']);
      if(typeof data['subscription_template_type'] !== 'undefined') xData['subscriptionTemplateType'] = TypeTransformer.to('string')(data['subscription_template_type']);
      if(typeof data['subscription_template_name'] !== 'undefined') xData['subscriptionTemplateName'] = TypeTransformer.to('string')(data['subscription_template_name']);  
      return xData;
},
    'AccountCallbacks': function(data){
      const xData = {};
      if(typeof data['callbacks'] !== 'undefined') xData['callbacks'] = TypeTransformer.to('AccountCallback[]')(data['callbacks']);  
      return xData;
},
    'AccountCallback': function(data){
      const xData = {};
      if(typeof data['callback_id'] !== 'undefined') xData['callbackId'] = TypeTransformer.to('number')(data['callback_id']);
      if(typeof data['type'] !== 'undefined') xData['type'] = TypeTransformer.to('string')(data['type']);
      if(typeof data['account_id'] !== 'undefined') xData['accountId'] = TypeTransformer.to('number')(data['account_id']);
      if(typeof data['hash'] !== 'undefined') xData['hash'] = TypeTransformer.to('string')(data['hash']);
      if(typeof data['account_name'] !== 'undefined') xData['accountName'] = TypeTransformer.to('string')(data['account_name']);
      if(typeof data['account_email'] !== 'undefined') xData['accountEmail'] = TypeTransformer.to('string')(data['account_email']);
      if(typeof data['language_code'] !== 'undefined') xData['languageCode'] = TypeTransformer.to('string')(data['language_code']);
      if(typeof data['account_first_name'] !== 'undefined') xData['accountFirstName'] = TypeTransformer.to('string')(data['account_first_name']);
      if(typeof data['account_last_name'] !== 'undefined') xData['accountLastName'] = TypeTransformer.to('string')(data['account_last_name']);
      if(typeof data['balance'] !== 'undefined') xData['balance'] = TypeTransformer.to('number')(data['balance']);
      if(typeof data['currency'] !== 'undefined') xData['currency'] = TypeTransformer.to('string')(data['currency']);
      if(typeof data['account_document_uploaded'] !== 'undefined') xData['accountDocumentUploaded'] = TypeTransformer.to('AccountDocumentUploadedCallback')(data['account_document_uploaded']);
      if(typeof data['regulation_address_uploaded'] !== 'undefined') xData['regulationAddressUploaded'] = TypeTransformer.to('RegulationAddressUploadedCallback')(data['regulation_address_uploaded']);
      if(typeof data['account_document_verified'] !== 'undefined') xData['accountDocumentVerified'] = TypeTransformer.to('AccountDocumentVerifiedCallback')(data['account_document_verified']);
      if(typeof data['account_is_frozen'] !== 'undefined') xData['accountIsFrozen'] = TypeTransformer.to('AccountIsFrozenCallback')(data['account_is_frozen']);
      if(typeof data['account_is_unfrozen'] !== 'undefined') xData['accountIsUnfrozen'] = TypeTransformer.to('AccountIsUnfrozenCallback')(data['account_is_unfrozen']);
      if(typeof data['activate_successful'] !== 'undefined') xData['activateSuccessful'] = TypeTransformer.to('ActivateSuccessfulCallback')(data['activate_successful']);
      if(typeof data['call_history_report'] !== 'undefined') xData['callHistoryReport'] = TypeTransformer.to('CallHistoryReportCallback')(data['call_history_report']);
      if(typeof data['card_expired'] !== 'undefined') xData['cardExpired'] = TypeTransformer.to('CardExpiredCallback')(data['card_expired']);
      if(typeof data['card_expires_in_month'] !== 'undefined') xData['cardExpiresInMonth'] = TypeTransformer.to('CardExpiresInMonthCallback')(data['card_expires_in_month']);
      if(typeof data['card_payment'] !== 'undefined') xData['cardPayment'] = TypeTransformer.to('CardPaymentCallback')(data['card_payment']);
      if(typeof data['card_payment_failed'] !== 'undefined') xData['cardPaymentFailed'] = TypeTransformer.to('CardPaymentFailedCallback')(data['card_payment_failed']);
      if(typeof data['robokassa_payment'] !== 'undefined') xData['robokassaPayment'] = TypeTransformer.to('RobokassaPaymentCallback')(data['robokassa_payment']);
      if(typeof data['wire_transfer'] !== 'undefined') xData['wireTransfer'] = TypeTransformer.to('WireTransferCallback')(data['wire_transfer']);
      if(typeof data['js_fail'] !== 'undefined') xData['jsFail'] = TypeTransformer.to('JSFailCallback')(data['js_fail']);
      if(typeof data['min_balance'] !== 'undefined') xData['minBalance'] = TypeTransformer.to('MinBalanceCallback')(data['min_balance']);
      if(typeof data['regulation_address_verified'] !== 'undefined') xData['regulationAddressVerified'] = TypeTransformer.to('RegulationAddressVerifiedCallback')(data['regulation_address_verified']);
      if(typeof data['renewed_subscriptions'] !== 'undefined') xData['renewedSubscriptions'] = TypeTransformer.to('RenewedSubscriptionsCallback')(data['renewed_subscriptions']);
      if(typeof data['reset_account_password_request'] !== 'undefined') xData['resetAccountPasswordRequest'] = TypeTransformer.to('ResetAccountPasswordRequestCallback')(data['reset_account_password_request']);
      if(typeof data['sip_registration_fail'] !== 'undefined') xData['sipRegistrationFail'] = TypeTransformer.to('SIPRegistrationFailCallback')(data['sip_registration_fail']);
      if(typeof data['stagnant_account'] !== 'undefined') xData['stagnantAccount'] = TypeTransformer.to('StagnantAccountCallback')(data['stagnant_account']);
      if(typeof data['subscription_is_frozen'] !== 'undefined') xData['subscriptionIsFrozen'] = TypeTransformer.to('SubscriptionIsFrozenCallback')(data['subscription_is_frozen']);
      if(typeof data['subscription_is_detached'] !== 'undefined') xData['subscriptionIsDetached'] = TypeTransformer.to('SubscriptionIsDetachedCallback')(data['subscription_is_detached']);
      if(typeof data['transaction_history_report'] !== 'undefined') xData['transactionHistoryReport'] = TypeTransformer.to('TransactionHistoryReportCallback')(data['transaction_history_report']);
      if(typeof data['plan_config'] !== 'undefined') xData['planConfig'] = TypeTransformer.to('PlanConfigCallback')(data['plan_config']);
      if(typeof data['unverified_subscription_detached'] !== 'undefined') xData['unverifiedSubscriptionDetached'] = TypeTransformer.to('UnverifiedSubscriptionDetachedCallback')(data['unverified_subscription_detached']);
      if(typeof data['expiring_callerid'] !== 'undefined') xData['expiringCallerid'] = TypeTransformer.to('ExpiringCallerIDCallback')(data['expiring_callerid']);
      if(typeof data['transcription_complete'] !== 'undefined') xData['transcriptionComplete'] = TypeTransformer.to('TranscriptionCompleteCallback')(data['transcription_complete']);
      if(typeof data['sms_inbound'] !== 'undefined') xData['smsInbound'] = TypeTransformer.to('InboundSmsCallback')(data['sms_inbound']);
      if(typeof data['new_invoice'] !== 'undefined') xData['newInvoice'] = TypeTransformer.to('NewInvoiceCallback')(data['new_invoice']);  
      return xData;
},
    'AccountDocumentUploadedCallback': function(data){
      const xData = {};
      if(typeof data['account_document_id'] !== 'undefined') xData['accountDocumentId'] = TypeTransformer.to('number')(data['account_document_id']);
      if(typeof data['uploaded'] !== 'undefined') xData['uploaded'] = TypeTransformer.to('Date')(data['uploaded']);
      if(typeof data['is_individual'] !== 'undefined') xData['isIndividual'] = TypeTransformer.to('boolean')(data['is_individual']);
      if(typeof data['verification_name'] !== 'undefined') xData['verificationName'] = TypeTransformer.to('string')(data['verification_name']);  
      return xData;
},
    'RegulationAddressUploadedCallback': function(data){
      const xData = {};
      if(typeof data['regulation_address_id'] !== 'undefined') xData['regulationAddressId'] = TypeTransformer.to('number')(data['regulation_address_id']);
      if(typeof data['uploaded'] !== 'undefined') xData['uploaded'] = TypeTransformer.to('Date')(data['uploaded']);
      if(typeof data['is_individual'] !== 'undefined') xData['isIndividual'] = TypeTransformer.to('boolean')(data['is_individual']);
      if(typeof data['regulation_address_name'] !== 'undefined') xData['regulationAddressName'] = TypeTransformer.to('string')(data['regulation_address_name']);  
      return xData;
},
    'AccountDocumentVerifiedCallback': function(data){
      const xData = {};
      if(typeof data['account_document_id'] !== 'undefined') xData['accountDocumentId'] = TypeTransformer.to('number')(data['account_document_id']);
      if(typeof data['account_document_status'] !== 'undefined') xData['accountDocumentStatus'] = TypeTransformer.to('string')(data['account_document_status']);
      if(typeof data['uploaded'] !== 'undefined') xData['uploaded'] = TypeTransformer.to('Date')(data['uploaded']);
      if(typeof data['is_individual'] !== 'undefined') xData['isIndividual'] = TypeTransformer.to('boolean')(data['is_individual']);
      if(typeof data['comment'] !== 'undefined') xData['comment'] = TypeTransformer.to('string')(data['comment']);
      if(typeof data['verification_name'] !== 'undefined') xData['verificationName'] = TypeTransformer.to('string')(data['verification_name']);  
      return xData;
},
    'AccountIsFrozenCallback': function(data){
      const xData = {};
        
      return xData;
},
    'AccountIsUnfrozenCallback': function(data){
      const xData = {};
        
      return xData;
},
    'ActivateSuccessfulCallback': function(data){
      const xData = {};
        
      return xData;
},
    'CallHistoryReportCallback': function(data){
      const xData = {};
      if(typeof data['history_report_id'] !== 'undefined') xData['historyReportId'] = TypeTransformer.to('number')(data['history_report_id']);
      if(typeof data['success'] !== 'undefined') xData['success'] = TypeTransformer.to('boolean')(data['success']);
      if(typeof data['order_date'] !== 'undefined') xData['orderDate'] = TypeTransformer.to('Date')(data['order_date']);  
      return xData;
},
    'CardExpiredCallback': function(data){
      const xData = {};
        
      return xData;
},
    'CardExpiresInMonthCallback': function(data){
      const xData = {};
        
      return xData;
},
    'CardPaymentCallback': function(data){
      const xData = {};
      if(typeof data['transaction_id'] !== 'undefined') xData['transactionId'] = TypeTransformer.to('number')(data['transaction_id']);
      if(typeof data['transaction_type'] !== 'undefined') xData['transactionType'] = TypeTransformer.to('string')(data['transaction_type']);
      if(typeof data['amount'] !== 'undefined') xData['amount'] = TypeTransformer.to('number')(data['amount']);  
      return xData;
},
    'CardPaymentFailedCallback': function(data){
      const xData = {};
        
      return xData;
},
    'RobokassaPaymentCallback': function(data){
      const xData = {};
      if(typeof data['transaction_id'] !== 'undefined') xData['transactionId'] = TypeTransformer.to('number')(data['transaction_id']);
      if(typeof data['transaction_type'] !== 'undefined') xData['transactionType'] = TypeTransformer.to('string')(data['transaction_type']);
      if(typeof data['amount'] !== 'undefined') xData['amount'] = TypeTransformer.to('number')(data['amount']);  
      return xData;
},
    'WireTransferCallback': function(data){
      const xData = {};
      if(typeof data['transaction_id'] !== 'undefined') xData['transactionId'] = TypeTransformer.to('number')(data['transaction_id']);
      if(typeof data['transaction_type'] !== 'undefined') xData['transactionType'] = TypeTransformer.to('string')(data['transaction_type']);
      if(typeof data['amount'] !== 'undefined') xData['amount'] = TypeTransformer.to('number')(data['amount']);  
      return xData;
},
    'JSFailCallback': function(data){
      const xData = {};
        
      return xData;
},
    'MinBalanceCallback': function(data){
      const xData = {};
      if(typeof data['is_min_credit'] !== 'undefined') xData['isMinCredit'] = TypeTransformer.to('boolean')(data['is_min_credit']);
      if(typeof data['is_repeated'] !== 'undefined') xData['isRepeated'] = TypeTransformer.to('boolean')(data['is_repeated']);  
      return xData;
},
    'RegulationAddressVerifiedCallback': function(data){
      const xData = {};
      if(typeof data['regulation_address_id'] !== 'undefined') xData['regulationAddressId'] = TypeTransformer.to('number')(data['regulation_address_id']);
      if(typeof data['regulation_address_status'] !== 'undefined') xData['regulationAddressStatus'] = TypeTransformer.to('string')(data['regulation_address_status']);
      if(typeof data['uploaded'] !== 'undefined') xData['uploaded'] = TypeTransformer.to('Date')(data['uploaded']);
      if(typeof data['is_individual'] !== 'undefined') xData['isIndividual'] = TypeTransformer.to('boolean')(data['is_individual']);
      if(typeof data['comment'] !== 'undefined') xData['comment'] = TypeTransformer.to('string')(data['comment']);
      if(typeof data['regulation_address_name'] !== 'undefined') xData['regulationAddressName'] = TypeTransformer.to('string')(data['regulation_address_name']);  
      return xData;
},
    'RenewedSubscriptionsCallback': function(data){
      const xData = {};
      if(typeof data['subscriptions'] !== 'undefined') xData['subscriptions'] = TypeTransformer.to('RenewedSubscriptionsCallbackItem[]')(data['subscriptions']);  
      return xData;
},
    'RenewedSubscriptionsCallbackItem': function(data){
      const xData = {};
      if(typeof data['type'] !== 'undefined') xData['type'] = TypeTransformer.to('string')(data['type']);
      if(typeof data['name'] !== 'undefined') xData['name'] = TypeTransformer.to('string')(data['name']);
      if(typeof data['cost'] !== 'undefined') xData['cost'] = TypeTransformer.to('number')(data['cost']);
      if(typeof data['next_renewal'] !== 'undefined') xData['nextRenewal'] = TypeTransformer.to('Date')(data['next_renewal']);  
      return xData;
},
    'ResetAccountPasswordRequestCallback': function(data){
      const xData = {};
        
      return xData;
},
    'SIPRegistrationFailCallback': function(data){
      const xData = {};
      if(typeof data['sip_registration_id'] !== 'undefined') xData['sipRegistrationId'] = TypeTransformer.to('number')(data['sip_registration_id']);  
      return xData;
},
    'SubscriptionIsDetachedCallback': function(data){
      const xData = {};
      if(typeof data['subscriptions'] !== 'undefined') xData['subscriptions'] = TypeTransformer.to('SubscriptionIsDetachedCallbackItem[]')(data['subscriptions']);  
      return xData;
},
    'SubscriptionIsDetachedCallbackItem': function(data){
      const xData = {};
      if(typeof data['type'] !== 'undefined') xData['type'] = TypeTransformer.to('string')(data['type']);
      if(typeof data['name'] !== 'undefined') xData['name'] = TypeTransformer.to('string')(data['name']);  
      return xData;
},
    'SubscriptionIsFrozenCallback': function(data){
      const xData = {};
      if(typeof data['subscriptions'] !== 'undefined') xData['subscriptions'] = TypeTransformer.to('SubscriptionIsFrozenCallbackItem[]')(data['subscriptions']);  
      return xData;
},
    'SubscriptionIsFrozenCallbackItem': function(data){
      const xData = {};
      if(typeof data['type'] !== 'undefined') xData['type'] = TypeTransformer.to('string')(data['type']);
      if(typeof data['name'] !== 'undefined') xData['name'] = TypeTransformer.to('string')(data['name']);
      if(typeof data['cost'] !== 'undefined') xData['cost'] = TypeTransformer.to('number')(data['cost']);  
      return xData;
},
    'StagnantAccountCallback': function(data){
      const xData = {};
        
      return xData;
},
    'TransactionHistoryReportCallback': function(data){
      const xData = {};
      if(typeof data['history_report_id'] !== 'undefined') xData['historyReportId'] = TypeTransformer.to('number')(data['history_report_id']);
      if(typeof data['success'] !== 'undefined') xData['success'] = TypeTransformer.to('boolean')(data['success']);
      if(typeof data['order_date'] !== 'undefined') xData['orderDate'] = TypeTransformer.to('Date')(data['order_date']);  
      return xData;
},
    'PlanConfigCallback': function(data){
      const xData = {};
      if(typeof data['plan_type'] !== 'undefined') xData['planType'] = TypeTransformer.to('string')(data['plan_type']);
      if(typeof data['plan_name'] !== 'undefined') xData['planName'] = TypeTransformer.to('string')(data['plan_name']);
      if(typeof data['packages'] !== 'undefined') xData['packages'] = TypeTransformer.to('PlanPackageConfig[]')(data['packages']);  
      return xData;
},
    'PlanPackageConfig': function(data){
      const xData = {};
      if(typeof data['price_group_id'] !== 'undefined') xData['priceGroupId'] = TypeTransformer.to('number[]')(data['price_group_id']);
      if(typeof data['package_name'] !== 'undefined') xData['packageName'] = TypeTransformer.to('string')(data['package_name']);
      if(typeof data['package_uuid'] !== 'undefined') xData['packageUuid'] = TypeTransformer.to('string')(data['package_uuid']);
      if(typeof data['may_overrun'] !== 'undefined') xData['mayOverrun'] = TypeTransformer.to('boolean')(data['may_overrun']);
      if(typeof data['package_size'] !== 'undefined') xData['packageSize'] = TypeTransformer.to('number')(data['package_size']);  
      return xData;
},
    'UnverifiedSubscriptionDetachedCallback': function(data){
      const xData = {};
      if(typeof data['subscriptions'] !== 'undefined') xData['subscriptions'] = TypeTransformer.to('UnverifiedSubscriptionDetachedCallbackItem[]')(data['subscriptions']);  
      return xData;
},
    'UnverifiedSubscriptionDetachedCallbackItem': function(data){
      const xData = {};
      if(typeof data['type'] !== 'undefined') xData['type'] = TypeTransformer.to('string')(data['type']);
      if(typeof data['name'] !== 'undefined') xData['name'] = TypeTransformer.to('string')(data['name']);  
      return xData;
},
    'ExpiringCallerIDCallback': function(data){
      const xData = {};
      if(typeof data['callerids'] !== 'undefined') xData['callerids'] = TypeTransformer.to('string[]')(data['callerids']);
      if(typeof data['expiration_date'] !== 'undefined') xData['expirationDate'] = TypeTransformer.to('Date')(data['expiration_date']);  
      return xData;
},
    'TranscriptionCompleteCallback': function(data){
      const xData = {};
      if(typeof data['transcription_complete'] !== 'undefined') xData['transcriptionComplete'] = TypeTransformer.to('TranscriptionCompleteCallbackItem')(data['transcription_complete']);  
      return xData;
},
    'TranscriptionCompleteCallbackItem': function(data){
      const xData = {};
      if(typeof data['record_url'] !== 'undefined') xData['recordUrl'] = TypeTransformer.to('string')(data['record_url']);
      if(typeof data['transcription_url'] !== 'undefined') xData['transcriptionUrl'] = TypeTransformer.to('string')(data['transcription_url']);
      if(typeof data['call_session_history_id'] !== 'undefined') xData['callSessionHistoryId'] = TypeTransformer.to('number')(data['call_session_history_id']);
      if(typeof data['transcription_cost'] !== 'undefined') xData['transcriptionCost'] = TypeTransformer.to('number')(data['transcription_cost']);  
      return xData;
},
    'ZipCode': function(data){
      const xData = {};
      if(typeof data['city'] !== 'undefined') xData['city'] = TypeTransformer.to('string')(data['city']);
      if(typeof data['zip_code'] !== 'undefined') xData['zipCode'] = TypeTransformer.to('string')(data['zip_code']);  
      return xData;
},
    'RegulationCountry': function(data){
      const xData = {};
      if(typeof data['country_code'] !== 'undefined') xData['countryCode'] = TypeTransformer.to('string')(data['country_code']);
      if(typeof data['country_name'] !== 'undefined') xData['countryName'] = TypeTransformer.to('string')(data['country_name']);  
      return xData;
},
    'RegulationAddress': function(data){
      const xData = {};
      if(typeof data['regulation_address_id'] !== 'undefined') xData['regulationAddressId'] = TypeTransformer.to('number')(data['regulation_address_id']);
      if(typeof data['external_id'] !== 'undefined') xData['externalId'] = TypeTransformer.to('string')(data['external_id']);
      if(typeof data['country_code'] !== 'undefined') xData['countryCode'] = TypeTransformer.to('string')(data['country_code']);
      if(typeof data['phone_category_name'] !== 'undefined') xData['phoneCategoryName'] = TypeTransformer.to('string')(data['phone_category_name']);
      if(typeof data['salutation'] !== 'undefined') xData['salutation'] = TypeTransformer.to('string')(data['salutation']);
      if(typeof data['company'] !== 'undefined') xData['company'] = TypeTransformer.to('string')(data['company']);
      if(typeof data['first_name'] !== 'undefined') xData['firstName'] = TypeTransformer.to('string')(data['first_name']);
      if(typeof data['last_name'] !== 'undefined') xData['lastName'] = TypeTransformer.to('string')(data['last_name']);
      if(typeof data['owner_country_code'] !== 'undefined') xData['ownerCountryCode'] = TypeTransformer.to('string')(data['owner_country_code']);
      if(typeof data['city'] !== 'undefined') xData['city'] = TypeTransformer.to('string')(data['city']);
      if(typeof data['zip_code'] !== 'undefined') xData['zipCode'] = TypeTransformer.to('string')(data['zip_code']);
      if(typeof data['street'] !== 'undefined') xData['street'] = TypeTransformer.to('string')(data['street']);
      if(typeof data['builder_number'] !== 'undefined') xData['builderNumber'] = TypeTransformer.to('string')(data['builder_number']);
      if(typeof data['builder_latter'] !== 'undefined') xData['builderLatter'] = TypeTransformer.to('string')(data['builder_latter']);
      if(typeof data['status'] !== 'undefined') xData['status'] = TypeTransformer.to('string')(data['status']);
      if(typeof data['reject_message'] !== 'undefined') xData['rejectMessage'] = TypeTransformer.to('string')(data['reject_message']);  
      return xData;
},
    'RegulationRegionRecord': function(data){
      const xData = {};
      if(typeof data['phone_region_id'] !== 'undefined') xData['phoneRegionId'] = TypeTransformer.to('number')(data['phone_region_id']);
      if(typeof data['phone_region_name'] !== 'undefined') xData['phoneRegionName'] = TypeTransformer.to('string')(data['phone_region_name']);
      if(typeof data['phone_region_code'] !== 'undefined') xData['phoneRegionCode'] = TypeTransformer.to('string')(data['phone_region_code']);
      if(typeof data['is_need_regulation_address'] !== 'undefined') xData['isNeedRegulationAddress'] = TypeTransformer.to('boolean')(data['is_need_regulation_address']);
      if(typeof data['regulation_address_type'] !== 'undefined') xData['regulationAddressType'] = TypeTransformer.to('string')(data['regulation_address_type']);  
      return xData;
},
    'PstnBlackListInfoType': function(data){
      const xData = {};
      if(typeof data['pstn_blacklist_id'] !== 'undefined') xData['pstnBlacklistId'] = TypeTransformer.to('number')(data['pstn_blacklist_id']);
      if(typeof data['pstn_blacklist_phone '] !== 'undefined') xData['pstnBlacklistPhone '] = TypeTransformer.to('string')(data['pstn_blacklist_phone ']);  
      return xData;
},
    'DialogflowKeyInfo': function(data){
      const xData = {};
      if(typeof data['dialogflow_key_id'] !== 'undefined') xData['dialogflowKeyId'] = TypeTransformer.to('number')(data['dialogflow_key_id']);
      if(typeof data['content'] !== 'undefined') xData['content'] = TypeTransformer.to('DialogflowKey')(data['content']);
      if(typeof data['applications'] !== 'undefined') xData['applications'] = TypeTransformer.to('ApplicationInfo[]')(data['applications']);  
      return xData;
},
    'DialogflowKey': function(data){
      const xData = {};
      if(typeof data['project_id'] !== 'undefined') xData['projectId'] = TypeTransformer.to('string')(data['project_id']);  
      return xData;
},
    'PushCredentialInfo': function(data){
      const xData = {};
      if(typeof data['push_credential_id'] !== 'undefined') xData['pushCredentialId'] = TypeTransformer.to('number')(data['push_credential_id']);
      if(typeof data['push_provider_id'] !== 'undefined') xData['pushProviderId'] = TypeTransformer.to('number')(data['push_provider_id']);
      if(typeof data['push_provider_name'] !== 'undefined') xData['pushProviderName'] = TypeTransformer.to('string')(data['push_provider_name']);
      if(typeof data['credential_bundle'] !== 'undefined') xData['credentialBundle'] = TypeTransformer.to('string')(data['credential_bundle']);
      if(typeof data['content'] !== 'undefined') xData['content'] = TypeTransformer.to('PushCredentialContent')(data['content']);
      if(typeof data['applications'] !== 'undefined') xData['applications'] = TypeTransformer.to('ApplicationInfo[]')(data['applications']);  
      return xData;
},
    'PushCredentialContent': function(data){
      const xData = {};
      if(typeof data['cert_file_name'] !== 'undefined') xData['certFileName'] = TypeTransformer.to('string')(data['cert_file_name']);
      if(typeof data['cert_content'] !== 'undefined') xData['certContent'] = TypeTransformer.to('string')(data['cert_content']);
      if(typeof data['is_dev_mode'] !== 'undefined') xData['isDevMode'] = TypeTransformer.to('boolean')(data['is_dev_mode']);
      if(typeof data['sender_id'] !== 'undefined') xData['senderId'] = TypeTransformer.to('string')(data['sender_id']);  
      return xData;
},
    'InboundSmsCallback': function(data){
      const xData = {};
      if(typeof data['sms_inbound'] !== 'undefined') xData['smsInbound'] = TypeTransformer.to('InboundSmsCallbackItem[]')(data['sms_inbound']);  
      return xData;
},
    'InboundSmsCallbackItem': function(data){
      const xData = {};
      if(typeof data['source_number'] !== 'undefined') xData['sourceNumber'] = TypeTransformer.to('string')(data['source_number']);
      if(typeof data['destination_number'] !== 'undefined') xData['destinationNumber'] = TypeTransformer.to('string')(data['destination_number']);
      if(typeof data['sms_body'] !== 'undefined') xData['smsBody'] = TypeTransformer.to('string')(data['sms_body']);  
      return xData;
},
    'NewInvoiceCallback': function(data){
      const xData = {};
      if(typeof data['new_invoice'] !== 'undefined') xData['newInvoice'] = TypeTransformer.to('NewInvoiceCallbackItem')(data['new_invoice']);  
      return xData;
},
    'NewInvoiceCallbackItem': function(data){
      const xData = {};
      if(typeof data['invoice_number'] !== 'undefined') xData['invoiceNumber'] = TypeTransformer.to('string')(data['invoice_number']);
      if(typeof data['invoice_date'] !== 'undefined') xData['invoiceDate'] = TypeTransformer.to('string')(data['invoice_date']);
      if(typeof data['prepayment'] !== 'undefined') xData['prepayment'] = TypeTransformer.to('boolean')(data['prepayment']);
      if(typeof data['currency'] !== 'undefined') xData['currency'] = TypeTransformer.to('string')(data['currency']);
      if(typeof data['total_amount'] !== 'undefined') xData['totalAmount'] = TypeTransformer.to('number')(data['total_amount']);
      if(typeof data['total_tax_amount'] !== 'undefined') xData['totalTaxAmount'] = TypeTransformer.to('number')(data['total_tax_amount']);
      if(typeof data['units'] !== 'undefined') xData['units'] = TypeTransformer.to('InvoiceUnits[]')(data['units']);  
      return xData;
},
    'InvoiceUnits': function(data){
      const xData = {};
      if(typeof data['description'] !== 'undefined') xData['description'] = TypeTransformer.to('string')(data['description']);
      if(typeof data['amount'] !== 'undefined') xData['amount'] = TypeTransformer.to('number')(data['amount']);
      if(typeof data['vat_rate'] !== 'undefined') xData['vatRate'] = TypeTransformer.to('number')(data['vat_rate']);
      if(typeof data['tax_amount'] !== 'undefined') xData['taxAmount'] = TypeTransformer.to('number')(data['tax_amount']);  
      return xData;
},
    'RecordStorageInfoType': function(data){
      const xData = {};
      if(typeof data['record_storage_id'] !== 'undefined') xData['recordStorageId'] = TypeTransformer.to('number')(data['record_storage_id']);
      if(typeof data['record_storage_name'] !== 'undefined') xData['recordStorageName'] = TypeTransformer.to('string')(data['record_storage_name']);  
      return xData;
},
    'KeyInfo': function(data){
      const xData = {};
      if(typeof data['account_email'] !== 'undefined') xData['accountEmail'] = TypeTransformer.to('string')(data['account_email']);
      if(typeof data['account_id'] !== 'undefined') xData['accountId'] = TypeTransformer.to('number')(data['account_id']);
      if(typeof data['key_id'] !== 'undefined') xData['keyId'] = TypeTransformer.to('string')(data['key_id']);
      if(typeof data['private_key'] !== 'undefined') xData['privateKey'] = TypeTransformer.to('string')(data['private_key']);  
      return xData;
},
    'KeyView': function(data){
      const xData = {};
      if(typeof data['key_id'] !== 'undefined') xData['keyId'] = TypeTransformer.to('string')(data['key_id']);
      if(typeof data['roles'] !== 'undefined') xData['roles'] = TypeTransformer.to('RoleView[]')(data['roles']);
      if(typeof data['description'] !== 'undefined') xData['description'] = TypeTransformer.to('string')(data['description']);
      if(typeof data['subuser'] !== 'undefined') xData['subuser'] = TypeTransformer.to('SubUserView[]')(data['subuser']);  
      return xData;
},
    'SubUserView': function(data){
      const xData = {};
      if(typeof data['subuser_id'] !== 'undefined') xData['subuserId'] = TypeTransformer.to('number')(data['subuser_id']);
      if(typeof data['subuser_name'] !== 'undefined') xData['subuserName'] = TypeTransformer.to('string')(data['subuser_name']);
      if(typeof data['description'] !== 'undefined') xData['description'] = TypeTransformer.to('string')(data['description']);
      if(typeof data['roles'] !== 'undefined') xData['roles'] = TypeTransformer.to('RoleView[]')(data['roles']);  
      return xData;
},
    'SubUserID': function(data){
      const xData = {};
      if(typeof data['subuser_id'] !== 'undefined') xData['subuserId'] = TypeTransformer.to('number')(data['subuser_id']);  
      return xData;
},
    'RoleView': function(data){
      const xData = {};
      if(typeof data['role_name'] !== 'undefined') xData['roleName'] = TypeTransformer.to('string')(data['role_name']);
      if(typeof data['role_id'] !== 'undefined') xData['roleId'] = TypeTransformer.to('number')(data['role_id']);
      if(typeof data['inherited'] !== 'undefined') xData['inherited'] = TypeTransformer.to('boolean')(data['inherited']);
      if(typeof data['child_ids'] !== 'undefined') xData['childIds'] = TypeTransformer.to('number[]')(data['child_ids']);
      if(typeof data['parent_role_id'] !== 'undefined') xData['parentRoleId'] = TypeTransformer.to('number[]')(data['parent_role_id']);
      if(typeof data['gui_only'] !== 'undefined') xData['guiOnly'] = TypeTransformer.to('boolean')(data['gui_only']);  
      return xData;
},
    'RoleGroupView': function(data){
      const xData = {};
      if(typeof data['id'] !== 'undefined') xData['id'] = TypeTransformer.to('number')(data['id']);
      if(typeof data['name'] !== 'undefined') xData['name'] = TypeTransformer.to('string')(data['name']);  
      return xData;
},
    'ChildAccountSubscriptionType': function(data){
      const xData = {};
      if(typeof data['subscription_id'] !== 'undefined') xData['subscriptionId'] = TypeTransformer.to('number')(data['subscription_id']);
      if(typeof data['subscription_name'] !== 'undefined') xData['subscriptionName'] = TypeTransformer.to('string')(data['subscription_name']);
      if(typeof data['subscription_template_id'] !== 'undefined') xData['subscriptionTemplateId'] = TypeTransformer.to('number')(data['subscription_template_id']);
      if(typeof data['auto_charge'] !== 'undefined') xData['autoCharge'] = TypeTransformer.to('boolean')(data['auto_charge']);
      if(typeof data['next_renewal'] !== 'undefined') xData['nextRenewal'] = TypeTransformer.to('Date')(data['next_renewal']);
      if(typeof data['periodic_price'] !== 'undefined') xData['periodicPrice'] = TypeTransformer.to('number')(data['periodic_price']);
      if(typeof data['active'] !== 'undefined') xData['active'] = TypeTransformer.to('boolean')(data['active']);  
      return xData;
},
    'ChildAccountSubscriptionTemplateType': function(data){
      const xData = {};
      if(typeof data['subscription_template_id'] !== 'undefined') xData['subscriptionTemplateId'] = TypeTransformer.to('number')(data['subscription_template_id']);
      if(typeof data['subscription_template_name'] !== 'undefined') xData['subscriptionTemplateName'] = TypeTransformer.to('string')(data['subscription_template_name']);
      if(typeof data['installation_price'] !== 'undefined') xData['installationPrice'] = TypeTransformer.to('number')(data['installation_price']);
      if(typeof data['periodic_price'] !== 'undefined') xData['periodicPrice'] = TypeTransformer.to('number')(data['periodic_price']);  
      return xData;
},
    'SmsHistoryType': function(data){
      const xData = {};
      if(typeof data['sms_id'] !== 'undefined') xData['smsId'] = TypeTransformer.to('number')(data['sms_id']);
      if(typeof data['source_number'] !== 'undefined') xData['sourceNumber'] = TypeTransformer.to('number')(data['source_number']);
      if(typeof data['destination_number'] !== 'undefined') xData['destinationNumber'] = TypeTransformer.to('number')(data['destination_number']);
      if(typeof data['direction'] !== 'undefined') xData['direction'] = TypeTransformer.to('string')(data['direction']);
      if(typeof data['fragments'] !== 'undefined') xData['fragments'] = TypeTransformer.to('number')(data['fragments']);
      if(typeof data['cost'] !== 'undefined') xData['cost'] = TypeTransformer.to('number')(data['cost']);
      if(typeof data['status_id'] !== 'undefined') xData['statusId'] = TypeTransformer.to('number')(data['status_id']);
      if(typeof data['error_message'] !== 'undefined') xData['errorMessage'] = TypeTransformer.to('string')(data['error_message']);
      if(typeof data['processed_date'] !== 'undefined') xData['processedDate'] = TypeTransformer.to('Date')(data['processed_date']);
      if(typeof data['transaction_id'] !== 'undefined') xData['transactionId'] = TypeTransformer.to('number')(data['transaction_id']);  
      return xData;
}
  }
  private static toActors = {
    'APIError': function(data){
      const xData = {};
      if(typeof data['code'] !== 'undefined') xData['code'] = TypeTransformer.from('number')(data['code']);
      if(typeof data['msg'] !== 'undefined') xData['msg'] = TypeTransformer.from('string')(data['msg']);
      return xData;
},
    'AccountInfo': function(data){
      const xData = {};
      if(typeof data['accountId'] !== 'undefined') xData['account_id'] = TypeTransformer.from('number')(data['accountId']);
      if(typeof data['accountName'] !== 'undefined') xData['account_name'] = TypeTransformer.from('string')(data['accountName']);
      if(typeof data['accountEmail'] !== 'undefined') xData['account_email'] = TypeTransformer.from('string')(data['accountEmail']);
      if(typeof data['apiKey'] !== 'undefined') xData['api_key'] = TypeTransformer.from('string')(data['apiKey']);
      if(typeof data['accountFirstName'] !== 'undefined') xData['account_first_name'] = TypeTransformer.from('string')(data['accountFirstName']);
      if(typeof data['accountLastName'] !== 'undefined') xData['account_last_name'] = TypeTransformer.from('string')(data['accountLastName']);
      if(typeof data['created'] !== 'undefined') xData['created'] = TypeTransformer.from('Date')(data['created']);
      if(typeof data['languageCode'] !== 'undefined') xData['language_code'] = TypeTransformer.from('string')(data['languageCode']);
      if(typeof data['location'] !== 'undefined') xData['location'] = TypeTransformer.from('string')(data['location']);
      if(typeof data['minBalanceToNotify'] !== 'undefined') xData['min_balance_to_notify'] = TypeTransformer.from('number')(data['minBalanceToNotify']);
      if(typeof data['accountNotifications'] !== 'undefined') xData['account_notifications'] = TypeTransformer.from('boolean')(data['accountNotifications']);
      if(typeof data['tariffChangingNotifications'] !== 'undefined') xData['tariff_changing_notifications'] = TypeTransformer.from('boolean')(data['tariffChangingNotifications']);
      if(typeof data['newsNotifications'] !== 'undefined') xData['news_notifications'] = TypeTransformer.from('boolean')(data['newsNotifications']);
      if(typeof data['billingAddressName'] !== 'undefined') xData['billing_address_name'] = TypeTransformer.from('string')(data['billingAddressName']);
      if(typeof data['billingAddressCountryCode'] !== 'undefined') xData['billing_address_country_code'] = TypeTransformer.from('string')(data['billingAddressCountryCode']);
      if(typeof data['billingAddressAddress'] !== 'undefined') xData['billing_address_address'] = TypeTransformer.from('string')(data['billingAddressAddress']);
      if(typeof data['billingAddressZip'] !== 'undefined') xData['billing_address_zip'] = TypeTransformer.from('string')(data['billingAddressZip']);
      if(typeof data['billingAddressPhone'] !== 'undefined') xData['billing_address_phone'] = TypeTransformer.from('string')(data['billingAddressPhone']);
      if(typeof data['billingAddressState'] !== 'undefined') xData['billing_address_state'] = TypeTransformer.from('string')(data['billingAddressState']);
      if(typeof data['active'] !== 'undefined') xData['active'] = TypeTransformer.from('boolean')(data['active']);
      if(typeof data['frozen'] !== 'undefined') xData['frozen'] = TypeTransformer.from('boolean')(data['frozen']);
      if(typeof data['balance'] !== 'undefined') xData['balance'] = TypeTransformer.from('number')(data['balance']);
      if(typeof data['creditLimit'] !== 'undefined') xData['credit_limit'] = TypeTransformer.from('number')(data['creditLimit']);
      if(typeof data['currency'] !== 'undefined') xData['currency'] = TypeTransformer.from('string')(data['currency']);
      if(typeof data['supportRobokassa'] !== 'undefined') xData['support_robokassa'] = TypeTransformer.from('boolean')(data['supportRobokassa']);
      if(typeof data['supportBankCard'] !== 'undefined') xData['support_bank_card'] = TypeTransformer.from('boolean')(data['supportBankCard']);
      if(typeof data['supportInvoice'] !== 'undefined') xData['support_invoice'] = TypeTransformer.from('boolean')(data['supportInvoice']);
      if(typeof data['accountCustomData'] !== 'undefined') xData['account_custom_data'] = TypeTransformer.from('string')(data['accountCustomData']);
      if(typeof data['accessEntries'] !== 'undefined') xData['access_entries'] = TypeTransformer.from('string[]')(data['accessEntries']);
      if(typeof data['withAccessEntries'] !== 'undefined') xData['with_access_entries'] = TypeTransformer.from('boolean')(data['withAccessEntries']);
      if(typeof data['callbackUrl'] !== 'undefined') xData['callback_url'] = TypeTransformer.from('string')(data['callbackUrl']);
      if(typeof data['callbackSalt'] !== 'undefined') xData['callback_salt'] = TypeTransformer.from('string')(data['callbackSalt']);
      if(typeof data['sendJsError'] !== 'undefined') xData['send_js_error'] = TypeTransformer.from('boolean')(data['sendJsError']);
      if(typeof data['billingLimits'] !== 'undefined') xData['billing_limits'] = TypeTransformer.from('BillingLimits')(data['billingLimits']);
      return xData;
},
    'BillingLimits': function(data){
      const xData = {};
      if(typeof data['robokassa'] !== 'undefined') xData['robokassa'] = TypeTransformer.from('BillingLimitInfo')(data['robokassa']);
      if(typeof data['bankCard'] !== 'undefined') xData['bank_card'] = TypeTransformer.from('BillingLimitInfo')(data['bankCard']);
      if(typeof data['invoice'] !== 'undefined') xData['invoice'] = TypeTransformer.from('BillingLimitInfo')(data['invoice']);
      return xData;
},
    'BillingLimitInfo': function(data){
      const xData = {};
      if(typeof data['minAmount'] !== 'undefined') xData['min_amount'] = TypeTransformer.from('number')(data['minAmount']);
      if(typeof data['currency'] !== 'undefined') xData['currency'] = TypeTransformer.from('string')(data['currency']);
      return xData;
},
    'ShortAccountInfo': function(data){
      const xData = {};
      if(typeof data['accountId'] !== 'undefined') xData['account_id'] = TypeTransformer.from('number')(data['accountId']);
      if(typeof data['frozen'] !== 'undefined') xData['frozen'] = TypeTransformer.from('boolean')(data['frozen']);
      if(typeof data['balance'] !== 'undefined') xData['balance'] = TypeTransformer.from('number')(data['balance']);
      if(typeof data['currency'] !== 'undefined') xData['currency'] = TypeTransformer.from('string')(data['currency']);
      return xData;
},
    'ClonedAccount': function(data){
      const xData = {};
      if(typeof data['accountId'] !== 'undefined') xData['account_id'] = TypeTransformer.from('number')(data['accountId']);
      if(typeof data['accountName'] !== 'undefined') xData['account_name'] = TypeTransformer.from('string')(data['accountName']);
      if(typeof data['accountEmail'] !== 'undefined') xData['account_email'] = TypeTransformer.from('string')(data['accountEmail']);
      if(typeof data['active'] !== 'undefined') xData['active'] = TypeTransformer.from('boolean')(data['active']);
      if(typeof data['apiKey'] !== 'undefined') xData['api_key'] = TypeTransformer.from('string')(data['apiKey']);
      if(typeof data['users'] !== 'undefined') xData['users'] = TypeTransformer.from('ClonedUser[]')(data['users']);
      if(typeof data['scenarios'] !== 'undefined') xData['scenarios'] = TypeTransformer.from('ClonedScenario[]')(data['scenarios']);
      if(typeof data['applications'] !== 'undefined') xData['applications'] = TypeTransformer.from('ClonedApplication[]')(data['applications']);
      if(typeof data['acdQueues'] !== 'undefined') xData['acd_queues'] = TypeTransformer.from('ClonedACDQueue[]')(data['acdQueues']);
      if(typeof data['acdSkills'] !== 'undefined') xData['acd_skills'] = TypeTransformer.from('ClonedACDSkill[]')(data['acdSkills']);
      if(typeof data['adminRoles'] !== 'undefined') xData['admin_roles'] = TypeTransformer.from('ClonedAdminRole[]')(data['adminRoles']);
      if(typeof data['adminUsers'] !== 'undefined') xData['admin_users'] = TypeTransformer.from('ClonedAdminUser[]')(data['adminUsers']);
      return xData;
},
    'AccountPlanPackage': function(data){
      const xData = {};
      if(typeof data['priceGroupId'] !== 'undefined') xData['price_group_id'] = TypeTransformer.from('number[]')(data['priceGroupId']);
      if(typeof data['packageName'] !== 'undefined') xData['package_name'] = TypeTransformer.from('string')(data['packageName']);
      if(typeof data['mayOverrun'] !== 'undefined') xData['may_overrun'] = TypeTransformer.from('boolean')(data['mayOverrun']);
      if(typeof data['overrunPrice'] !== 'undefined') xData['overrun_price'] = TypeTransformer.from('number')(data['overrunPrice']);
      if(typeof data['overrunResources'] !== 'undefined') xData['overrun_resources'] = TypeTransformer.from('number')(data['overrunResources']);
      if(typeof data['resourceLeft'] !== 'undefined') xData['resource_left'] = TypeTransformer.from('number')(data['resourceLeft']);
      if(typeof data['packageSize'] !== 'undefined') xData['package_size'] = TypeTransformer.from('number')(data['packageSize']);
      if(typeof data['origPackageSize'] !== 'undefined') xData['orig_package_size'] = TypeTransformer.from('number')(data['origPackageSize']);
      return xData;
},
    'PlanPackage': function(data){
      const xData = {};
      if(typeof data['priceGroupId'] !== 'undefined') xData['price_group_id'] = TypeTransformer.from('number[]')(data['priceGroupId']);
      if(typeof data['packageName'] !== 'undefined') xData['package_name'] = TypeTransformer.from('string')(data['packageName']);
      if(typeof data['mayOverrun'] !== 'undefined') xData['may_overrun'] = TypeTransformer.from('boolean')(data['mayOverrun']);
      if(typeof data['overrunPrice'] !== 'undefined') xData['overrun_price'] = TypeTransformer.from('number')(data['overrunPrice']);
      if(typeof data['overrunResources'] !== 'undefined') xData['overrun_resources'] = TypeTransformer.from('number')(data['overrunResources']);
      if(typeof data['packageSize'] !== 'undefined') xData['package_size'] = TypeTransformer.from('number')(data['packageSize']);
      return xData;
},
    'ApplicationInfo': function(data){
      const xData = {};
      if(typeof data['applicationId'] !== 'undefined') xData['application_id'] = TypeTransformer.from('number')(data['applicationId']);
      if(typeof data['applicationName'] !== 'undefined') xData['application_name'] = TypeTransformer.from('string')(data['applicationName']);
      if(typeof data['modified'] !== 'undefined') xData['modified'] = TypeTransformer.from('Date')(data['modified']);
      if(typeof data['secureRecordStorage'] !== 'undefined') xData['secure_record_storage'] = TypeTransformer.from('boolean')(data['secureRecordStorage']);
      if(typeof data['users'] !== 'undefined') xData['users'] = TypeTransformer.from('UserInfo[]')(data['users']);
      return xData;
},
    'ClonedApplication': function(data){
      const xData = {};
      if(typeof data['applicationId'] !== 'undefined') xData['application_id'] = TypeTransformer.from('number')(data['applicationId']);
      if(typeof data['applicationName'] !== 'undefined') xData['application_name'] = TypeTransformer.from('string')(data['applicationName']);
      if(typeof data['users'] !== 'undefined') xData['users'] = TypeTransformer.from('ClonedRule[]')(data['users']);
      return xData;
},
    'UserInfo': function(data){
      const xData = {};
      if(typeof data['userId'] !== 'undefined') xData['user_id'] = TypeTransformer.from('number')(data['userId']);
      if(typeof data['userName'] !== 'undefined') xData['user_name'] = TypeTransformer.from('string')(data['userName']);
      if(typeof data['userDisplayName'] !== 'undefined') xData['user_display_name'] = TypeTransformer.from('string')(data['userDisplayName']);
      if(typeof data['userActive'] !== 'undefined') xData['user_active'] = TypeTransformer.from('boolean')(data['userActive']);
      if(typeof data['parentAccounting'] !== 'undefined') xData['parent_accounting'] = TypeTransformer.from('boolean')(data['parentAccounting']);
      if(typeof data['mobilePhone'] !== 'undefined') xData['mobile_phone'] = TypeTransformer.from('string')(data['mobilePhone']);
      if(typeof data['liveBalance'] !== 'undefined') xData['live_balance'] = TypeTransformer.from('number')(data['liveBalance']);
      if(typeof data['balance'] !== 'undefined') xData['balance'] = TypeTransformer.from('number')(data['balance']);
      if(typeof data['fixedBalance'] !== 'undefined') xData['fixed_balance'] = TypeTransformer.from('number')(data['fixedBalance']);
      if(typeof data['userCustomData'] !== 'undefined') xData['user_custom_data'] = TypeTransformer.from('string')(data['userCustomData']);
      if(typeof data['applications'] !== 'undefined') xData['applications'] = TypeTransformer.from('ApplicationInfo[]')(data['applications']);
      if(typeof data['skills'] !== 'undefined') xData['skills'] = TypeTransformer.from('SkillInfo[]')(data['skills']);
      if(typeof data['acdQueues'] !== 'undefined') xData['acd_queues'] = TypeTransformer.from('ACDQueueOperatorInfo[]')(data['acdQueues']);
      if(typeof data['acdStatus'] !== 'undefined') xData['acd_status'] = TypeTransformer.from('string')(data['acdStatus']);
      if(typeof data['acdStatusChangeTime'] !== 'undefined') xData['acd_status_change_time'] = TypeTransformer.from('Date')(data['acdStatusChangeTime']);
      if(typeof data['created'] !== 'undefined') xData['created'] = TypeTransformer.from('Date')(data['created']);
      if(typeof data['modified'] !== 'undefined') xData['modified'] = TypeTransformer.from('Date')(data['modified']);
      return xData;
},
    'ClonedUser': function(data){
      const xData = {};
      if(typeof data['userId'] !== 'undefined') xData['user_id'] = TypeTransformer.from('number')(data['userId']);
      if(typeof data['userName'] !== 'undefined') xData['user_name'] = TypeTransformer.from('string')(data['userName']);
      return xData;
},
    'ScenarioInfo': function(data){
      const xData = {};
      if(typeof data['scenarioId'] !== 'undefined') xData['scenario_id'] = TypeTransformer.from('number')(data['scenarioId']);
      if(typeof data['scenarioName'] !== 'undefined') xData['scenario_name'] = TypeTransformer.from('string')(data['scenarioName']);
      if(typeof data['scenarioScript'] !== 'undefined') xData['scenario_script'] = TypeTransformer.from('string')(data['scenarioScript']);
      if(typeof data['modified'] !== 'undefined') xData['modified'] = TypeTransformer.from('Date')(data['modified']);
      if(typeof data['parent'] !== 'undefined') xData['parent'] = TypeTransformer.from('boolean')(data['parent']);
      return xData;
},
    'ClonedScenario': function(data){
      const xData = {};
      if(typeof data['scenarioId'] !== 'undefined') xData['scenario_id'] = TypeTransformer.from('number')(data['scenarioId']);
      if(typeof data['scenarioName'] !== 'undefined') xData['scenario_name'] = TypeTransformer.from('string')(data['scenarioName']);
      return xData;
},
    'RuleInfo': function(data){
      const xData = {};
      if(typeof data['ruleId'] !== 'undefined') xData['rule_id'] = TypeTransformer.from('number')(data['ruleId']);
      if(typeof data['applicationId'] !== 'undefined') xData['application_id'] = TypeTransformer.from('number')(data['applicationId']);
      if(typeof data['ruleName'] !== 'undefined') xData['rule_name'] = TypeTransformer.from('string')(data['ruleName']);
      if(typeof data['rulePattern'] !== 'undefined') xData['rule_pattern'] = TypeTransformer.from('string')(data['rulePattern']);
      if(typeof data['rulePatternExclude'] !== 'undefined') xData['rule_pattern_exclude'] = TypeTransformer.from('string')(data['rulePatternExclude']);
      if(typeof data['videoConference'] !== 'undefined') xData['video_conference'] = TypeTransformer.from('boolean')(data['videoConference']);
      if(typeof data['scenarios'] !== 'undefined') xData['scenarios'] = TypeTransformer.from('ScenarioInfo[]')(data['scenarios']);
      if(typeof data['modified'] !== 'undefined') xData['modified'] = TypeTransformer.from('Date')(data['modified']);
      return xData;
},
    'ClonedRule': function(data){
      const xData = {};
      if(typeof data['ruleId'] !== 'undefined') xData['rule_id'] = TypeTransformer.from('number')(data['ruleId']);
      if(typeof data['ruleName'] !== 'undefined') xData['rule_name'] = TypeTransformer.from('string')(data['ruleName']);
      return xData;
},
    'SipWhiteListInfo': function(data){
      const xData = {};
      if(typeof data['sipWhitelistId'] !== 'undefined') xData['sip_whitelist_id'] = TypeTransformer.from('number')(data['sipWhitelistId']);
      if(typeof data['sipWhitelistNetwork'] !== 'undefined') xData['sip_whitelist_network'] = TypeTransformer.from('string')(data['sipWhitelistNetwork']);
      return xData;
},
    'CallSessionInfo': function(data){
      const xData = {};
      if(typeof data['callSessionHistoryId'] !== 'undefined') xData['call_session_history_id'] = TypeTransformer.from('number')(data['callSessionHistoryId']);
      if(typeof data['accountId'] !== 'undefined') xData['account_id'] = TypeTransformer.from('number')(data['accountId']);
      if(typeof data['applicationId'] !== 'undefined') xData['application_id'] = TypeTransformer.from('number')(data['applicationId']);
      if(typeof data['userId'] !== 'undefined') xData['user_id'] = TypeTransformer.from('number')(data['userId']);
      if(typeof data['startDate'] !== 'undefined') xData['start_date'] = TypeTransformer.from('Date')(data['startDate']);
      if(typeof data['duration'] !== 'undefined') xData['duration'] = TypeTransformer.from('number')(data['duration']);
      if(typeof data['initiatorAddress'] !== 'undefined') xData['initiator_address'] = TypeTransformer.from('string')(data['initiatorAddress']);
      if(typeof data['mediaServerAddress'] !== 'undefined') xData['media_server_address'] = TypeTransformer.from('string')(data['mediaServerAddress']);
      if(typeof data['logFileUrl'] !== 'undefined') xData['log_file_url'] = TypeTransformer.from('string')(data['logFileUrl']);
      if(typeof data['finishReason'] !== 'undefined') xData['finish_reason'] = TypeTransformer.from('string')(data['finishReason']);
      if(typeof data['calls'] !== 'undefined') xData['calls'] = TypeTransformer.from('CallInfo[]')(data['calls']);
      if(typeof data['otherResourceUsage'] !== 'undefined') xData['other_resource_usage'] = TypeTransformer.from('ResourceUsage[]')(data['otherResourceUsage']);
      if(typeof data['records'] !== 'undefined') xData['records'] = TypeTransformer.from('Record[]')(data['records']);
      if(typeof data['customData'] !== 'undefined') xData['custom_data'] = TypeTransformer.from('string')(data['customData']);
      return xData;
},
    'CallInfo': function(data){
      const xData = {};
      if(typeof data['callId'] !== 'undefined') xData['call_id'] = TypeTransformer.from('number')(data['callId']);
      if(typeof data['startTime'] !== 'undefined') xData['start_time'] = TypeTransformer.from('Date')(data['startTime']);
      if(typeof data['duration'] !== 'undefined') xData['duration'] = TypeTransformer.from('number')(data['duration']);
      if(typeof data['localNumber'] !== 'undefined') xData['local_number'] = TypeTransformer.from('string')(data['localNumber']);
      if(typeof data['remoteNumber'] !== 'undefined') xData['remote_number'] = TypeTransformer.from('string')(data['remoteNumber']);
      if(typeof data['remoteNumberType'] !== 'undefined') xData['remote_number_type'] = TypeTransformer.from('string')(data['remoteNumberType']);
      if(typeof data['incoming'] !== 'undefined') xData['incoming'] = TypeTransformer.from('boolean')(data['incoming']);
      if(typeof data['successful'] !== 'undefined') xData['successful'] = TypeTransformer.from('boolean')(data['successful']);
      if(typeof data['transactionId'] !== 'undefined') xData['transaction_id'] = TypeTransformer.from('number')(data['transactionId']);
      if(typeof data['recordUrl'] !== 'undefined') xData['record_url'] = TypeTransformer.from('string')(data['recordUrl']);
      if(typeof data['mediaServerAddress'] !== 'undefined') xData['media_server_address'] = TypeTransformer.from('string')(data['mediaServerAddress']);
      if(typeof data['cost'] !== 'undefined') xData['cost'] = TypeTransformer.from('number')(data['cost']);
      if(typeof data['customData'] !== 'undefined') xData['custom_data'] = TypeTransformer.from('string')(data['customData']);
      return xData;
},
    'TransactionInfo': function(data){
      const xData = {};
      if(typeof data['transactionId'] !== 'undefined') xData['transaction_id'] = TypeTransformer.from('number')(data['transactionId']);
      if(typeof data['accountId'] !== 'undefined') xData['account_id'] = TypeTransformer.from('string')(data['accountId']);
      if(typeof data['performedAt'] !== 'undefined') xData['performed_at'] = TypeTransformer.from('Date')(data['performedAt']);
      if(typeof data['amount'] !== 'undefined') xData['amount'] = TypeTransformer.from('number')(data['amount']);
      if(typeof data['currency'] !== 'undefined') xData['currency'] = TypeTransformer.from('string')(data['currency']);
      if(typeof data['transactionType'] !== 'undefined') xData['transaction_type'] = TypeTransformer.from('string')(data['transactionType']);
      if(typeof data['transactionDescription'] !== 'undefined') xData['transaction_description'] = TypeTransformer.from('string')(data['transactionDescription']);
      if(typeof data['paymentReference'] !== 'undefined') xData['payment_reference'] = TypeTransformer.from('string')(data['paymentReference']);
      return xData;
},
    'ResourceUsage': function(data){
      const xData = {};
      if(typeof data['resourceUsageId'] !== 'undefined') xData['resource_usage_id'] = TypeTransformer.from('number')(data['resourceUsageId']);
      if(typeof data['resourceType'] !== 'undefined') xData['resource_type'] = TypeTransformer.from('string')(data['resourceType']);
      if(typeof data['cost'] !== 'undefined') xData['cost'] = TypeTransformer.from('number')(data['cost']);
      if(typeof data['description'] !== 'undefined') xData['description'] = TypeTransformer.from('string')(data['description']);
      if(typeof data['usedAt'] !== 'undefined') xData['used_at'] = TypeTransformer.from('Date')(data['usedAt']);
      if(typeof data['transactionId'] !== 'undefined') xData['transaction_id'] = TypeTransformer.from('number')(data['transactionId']);
      if(typeof data['resourceQuantity'] !== 'undefined') xData['resource_quantity'] = TypeTransformer.from('number')(data['resourceQuantity']);
      if(typeof data['unit'] !== 'undefined') xData['unit'] = TypeTransformer.from('string')(data['unit']);
      if(typeof data['refCallId'] !== 'undefined') xData['ref_call_id'] = TypeTransformer.from('number')(data['refCallId']);
      return xData;
},
    'Record': function(data){
      const xData = {};
      if(typeof data['recordId'] !== 'undefined') xData['record_id'] = TypeTransformer.from('number')(data['recordId']);
      if(typeof data['recordName'] !== 'undefined') xData['record_name'] = TypeTransformer.from('string')(data['recordName']);
      if(typeof data['cost'] !== 'undefined') xData['cost'] = TypeTransformer.from('number')(data['cost']);
      if(typeof data['startTime'] !== 'undefined') xData['start_time'] = TypeTransformer.from('Date')(data['startTime']);
      if(typeof data['duration'] !== 'undefined') xData['duration'] = TypeTransformer.from('number')(data['duration']);
      if(typeof data['recordUrl'] !== 'undefined') xData['record_url'] = TypeTransformer.from('string')(data['recordUrl']);
      if(typeof data['transactionId'] !== 'undefined') xData['transaction_id'] = TypeTransformer.from('number')(data['transactionId']);
      if(typeof data['fileSize'] !== 'undefined') xData['file_size'] = TypeTransformer.from('number')(data['fileSize']);
      if(typeof data['transcriptionUrl'] !== 'undefined') xData['transcription_url'] = TypeTransformer.from('string')(data['transcriptionUrl']);
      if(typeof data['transcriptionStatus'] !== 'undefined') xData['transcription_status'] = TypeTransformer.from('string')(data['transcriptionStatus']);
      return xData;
},
    'AuditLogInfo': function(data){
      const xData = {};
      if(typeof data['auditLogId'] !== 'undefined') xData['audit_log_id'] = TypeTransformer.from('number')(data['auditLogId']);
      if(typeof data['accountId'] !== 'undefined') xData['account_id'] = TypeTransformer.from('number')(data['accountId']);
      if(typeof data['requested'] !== 'undefined') xData['requested'] = TypeTransformer.from('Date')(data['requested']);
      if(typeof data['ip'] !== 'undefined') xData['ip'] = TypeTransformer.from('string')(data['ip']);
      if(typeof data['cmdName'] !== 'undefined') xData['cmd_name'] = TypeTransformer.from('string')(data['cmdName']);
      if(typeof data['cmdArgs'] !== 'undefined') xData['cmd_args'] = TypeTransformer.from('any')(data['cmdArgs']);
      if(typeof data['cmdResult'] !== 'undefined') xData['cmd_result'] = TypeTransformer.from('any')(data['cmdResult']);
      return xData;
},
    'HistoryReport': function(data){
      const xData = {};
      if(typeof data['historyReportId'] !== 'undefined') xData['history_report_id'] = TypeTransformer.from('number')(data['historyReportId']);
      if(typeof data['historyType'] !== 'undefined') xData['history_type'] = TypeTransformer.from('string')(data['historyType']);
      if(typeof data['created'] !== 'undefined') xData['created'] = TypeTransformer.from('Date')(data['created']);
      if(typeof data['format'] !== 'undefined') xData['format'] = TypeTransformer.from('string')(data['format']);
      if(typeof data['completed'] !== 'undefined') xData['completed'] = TypeTransformer.from('Date')(data['completed']);
      if(typeof data['fileName'] !== 'undefined') xData['file_name'] = TypeTransformer.from('string')(data['fileName']);
      if(typeof data['fileSize'] !== 'undefined') xData['file_size'] = TypeTransformer.from('number')(data['fileSize']);
      if(typeof data['downloadSize'] !== 'undefined') xData['download_size'] = TypeTransformer.from('number')(data['downloadSize']);
      if(typeof data['downloadCount'] !== 'undefined') xData['download_count'] = TypeTransformer.from('number')(data['downloadCount']);
      if(typeof data['lastDownloaded'] !== 'undefined') xData['last_downloaded'] = TypeTransformer.from('Date')(data['lastDownloaded']);
      if(typeof data['storeUntil'] !== 'undefined') xData['store_until'] = TypeTransformer.from('Date')(data['storeUntil']);
      if(typeof data['error'] !== 'undefined') xData['error'] = TypeTransformer.from('APIError')(data['error']);
      if(typeof data['filters'] !== 'undefined') xData['filters'] = TypeTransformer.from('any')(data['filters']);
      if(typeof data['calculatedData'] !== 'undefined') xData['calculated_data'] = TypeTransformer.from('any')(data['calculatedData']);
      return xData;
},
    'CalculatedCallHistoryData': function(data){
      const xData = {};
      if(typeof data['sessionCount'] !== 'undefined') xData['session_count'] = TypeTransformer.from('number')(data['sessionCount']);
      if(typeof data['totalSessionCount'] !== 'undefined') xData['total_session_count'] = TypeTransformer.from('number')(data['totalSessionCount']);
      if(typeof data['timezone'] !== 'undefined') xData['timezone'] = TypeTransformer.from('string')(data['timezone']);
      return xData;
},
    'CalculatedTransactionHistoryData': function(data){
      const xData = {};
      if(typeof data['transactionCount'] !== 'undefined') xData['transaction_count'] = TypeTransformer.from('number')(data['transactionCount']);
      if(typeof data['totalTransactionCount'] !== 'undefined') xData['total_transaction_count'] = TypeTransformer.from('number')(data['totalTransactionCount']);
      if(typeof data['startBalance'] !== 'undefined') xData['start_balance'] = TypeTransformer.from('string')(data['startBalance']);
      if(typeof data['endBalance'] !== 'undefined') xData['end_balance'] = TypeTransformer.from('string')(data['endBalance']);
      if(typeof data['accountId'] !== 'undefined') xData['account_id'] = TypeTransformer.from('number')(data['accountId']);
      if(typeof data['userId'] !== 'undefined') xData['user_id'] = TypeTransformer.from('number')(data['userId']);
      if(typeof data['userName'] !== 'undefined') xData['user_name'] = TypeTransformer.from('number')(data['userName']);
      if(typeof data['timezone'] !== 'undefined') xData['timezone'] = TypeTransformer.from('string')(data['timezone']);
      return xData;
},
    'ACDSessionInfo': function(data){
      const xData = {};
      if(typeof data['acdSessionHistoryId'] !== 'undefined') xData['acd_session_history_id'] = TypeTransformer.from('number')(data['acdSessionHistoryId']);
      if(typeof data['acdRequestId'] !== 'undefined') xData['acd_request_id'] = TypeTransformer.from('string')(data['acdRequestId']);
      if(typeof data['accountId'] !== 'undefined') xData['account_id'] = TypeTransformer.from('number')(data['accountId']);
      if(typeof data['beginTime'] !== 'undefined') xData['begin_time'] = TypeTransformer.from('Date')(data['beginTime']);
      if(typeof data['priority'] !== 'undefined') xData['priority'] = TypeTransformer.from('number')(data['priority']);
      if(typeof data['acdQueueId'] !== 'undefined') xData['acd_queue_id'] = TypeTransformer.from('number')(data['acdQueueId']);
      if(typeof data['userId'] !== 'undefined') xData['user_id'] = TypeTransformer.from('number')(data['userId']);
      if(typeof data['waitingDuration'] !== 'undefined') xData['waiting_duration'] = TypeTransformer.from('number')(data['waitingDuration']);
      if(typeof data['inServiceDuration'] !== 'undefined') xData['in_service_duration'] = TypeTransformer.from('number')(data['inServiceDuration']);
      if(typeof data['afterServiceDuration'] !== 'undefined') xData['after_service_duration'] = TypeTransformer.from('number')(data['afterServiceDuration']);
      if(typeof data['events'] !== 'undefined') xData['events'] = TypeTransformer.from('ACDSessionEventInfo[]')(data['events']);
      return xData;
},
    'ACDSessionEventInfo': function(data){
      const xData = {};
      if(typeof data['acdSessionEventId'] !== 'undefined') xData['acd_session_event_id'] = TypeTransformer.from('number')(data['acdSessionEventId']);
      if(typeof data['time'] !== 'undefined') xData['time'] = TypeTransformer.from('Date')(data['time']);
      if(typeof data['type'] !== 'undefined') xData['type'] = TypeTransformer.from('string')(data['type']);
      if(typeof data['userId'] !== 'undefined') xData['user_id'] = TypeTransformer.from('number')(data['userId']);
      if(typeof data['customData'] !== 'undefined') xData['custom_data'] = TypeTransformer.from('string')(data['customData']);
      return xData;
},
    'QueueInfo': function(data){
      const xData = {};
      if(typeof data['acdQueueId'] !== 'undefined') xData['acd_queue_id'] = TypeTransformer.from('number')(data['acdQueueId']);
      if(typeof data['acdQueueName'] !== 'undefined') xData['acd_queue_name'] = TypeTransformer.from('string')(data['acdQueueName']);
      if(typeof data['applicationId'] !== 'undefined') xData['application_id'] = TypeTransformer.from('number')(data['applicationId']);
      if(typeof data['acdQueuePriority'] !== 'undefined') xData['acd_queue_priority'] = TypeTransformer.from('number')(data['acdQueuePriority']);
      if(typeof data['serviceProbability'] !== 'undefined') xData['service_probability'] = TypeTransformer.from('number')(data['serviceProbability']);
      if(typeof data['autoBinding'] !== 'undefined') xData['auto_binding'] = TypeTransformer.from('boolean')(data['autoBinding']);
      if(typeof data['maxWaitingTime'] !== 'undefined') xData['max_waiting_time'] = TypeTransformer.from('number')(data['maxWaitingTime']);
      if(typeof data['maxQueueSize'] !== 'undefined') xData['max_queue_size'] = TypeTransformer.from('number')(data['maxQueueSize']);
      if(typeof data['averageServiceTime'] !== 'undefined') xData['average_service_time'] = TypeTransformer.from('number')(data['averageServiceTime']);
      if(typeof data['created'] !== 'undefined') xData['created'] = TypeTransformer.from('Date')(data['created']);
      if(typeof data['modified'] !== 'undefined') xData['modified'] = TypeTransformer.from('Date')(data['modified']);
      if(typeof data['deleted'] !== 'undefined') xData['deleted'] = TypeTransformer.from('Date')(data['deleted']);
      if(typeof data['users'] !== 'undefined') xData['users'] = TypeTransformer.from('QueueUsers[]')(data['users']);
      if(typeof data['skills'] !== 'undefined') xData['skills'] = TypeTransformer.from('QueueSkills[]')(data['skills']);
      if(typeof data['slThresholds'] !== 'undefined') xData['sl_thresholds'] = TypeTransformer.from('number[]')(data['slThresholds']);
      return xData;
},
    'QueueSkills': function(data){
      const xData = {};
      if(typeof data['skillId'] !== 'undefined') xData['skill_id'] = TypeTransformer.from('number')(data['skillId']);
      if(typeof data['skillName'] !== 'undefined') xData['skill_name'] = TypeTransformer.from('string')(data['skillName']);
      return xData;
},
    'QueueUsers': function(data){
      const xData = {};
      if(typeof data['userId'] !== 'undefined') xData['user_id'] = TypeTransformer.from('number')(data['userId']);
      return xData;
},
    'ACDState': function(data){
      const xData = {};
      if(typeof data['acdQueues'] !== 'undefined') xData['acd_queues'] = TypeTransformer.from('ACDQueueState[]')(data['acdQueues']);
      return xData;
},
    'ACDOperatorAggregationGroup': function(data){
      const xData = {};
      if(typeof data['userId'] !== 'undefined') xData['user_id'] = TypeTransformer.from('string')(data['userId']);
      if(typeof data['date'] !== 'undefined') xData['date'] = TypeTransformer.from('Date')(data['date']);
      if(typeof data['hour'] !== 'undefined') xData['hour'] = TypeTransformer.from('number')(data['hour']);
      if(typeof data['statistics'] !== 'undefined') xData['statistics'] = TypeTransformer.from('ACDOperatorStatistics[]')(data['statistics']);
      return xData;
},
    'ACDOperatorStatusAggregationGroup': function(data){
      const xData = {};
      if(typeof data['userId'] !== 'undefined') xData['user_id'] = TypeTransformer.from('string')(data['userId']);
      if(typeof data['date'] !== 'undefined') xData['date'] = TypeTransformer.from('Date')(data['date']);
      if(typeof data['hour'] !== 'undefined') xData['hour'] = TypeTransformer.from('number')(data['hour']);
      if(typeof data['statistics'] !== 'undefined') xData['statistics'] = TypeTransformer.from('ACDOperatorStatusStatistics[]')(data['statistics']);
      return xData;
},
    'ACDOperatorStatistics': function(data){
      const xData = {};
      if(typeof data['userId'] !== 'undefined') xData['user_id'] = TypeTransformer.from('string')(data['userId']);
      if(typeof data['date'] !== 'undefined') xData['date'] = TypeTransformer.from('Date')(data['date']);
      if(typeof data['hour'] !== 'undefined') xData['hour'] = TypeTransformer.from('number')(data['hour']);
      if(typeof data['SA'] !== 'undefined') xData['SA'] = TypeTransformer.from('ACDStatisticsItem')(data['SA']);
      if(typeof data['TT'] !== 'undefined') xData['TT'] = TypeTransformer.from('ACDStatisticsItem')(data['TT']);
      if(typeof data['ACW'] !== 'undefined') xData['ACW'] = TypeTransformer.from('ACDStatisticsItem')(data['ACW']);
      if(typeof data['HT'] !== 'undefined') xData['HT'] = TypeTransformer.from('ACDStatisticsItem')(data['HT']);
      if(typeof data['AC'] !== 'undefined') xData['AC'] = TypeTransformer.from('number')(data['AC']);
      if(typeof data['UAC'] !== 'undefined') xData['UAC'] = TypeTransformer.from('number')(data['UAC']);
      if(typeof data['TDT'] !== 'undefined') xData['TDT'] = TypeTransformer.from('number')(data['TDT']);
      if(typeof data['THT'] !== 'undefined') xData['THT'] = TypeTransformer.from('number')(data['THT']);
      if(typeof data['TTT'] !== 'undefined') xData['TTT'] = TypeTransformer.from('number')(data['TTT']);
      if(typeof data['TACW'] !== 'undefined') xData['TACW'] = TypeTransformer.from('number')(data['TACW']);
      return xData;
},
    'ACDOperatorStatusStatistics': function(data){
      const xData = {};
      if(typeof data['userId'] !== 'undefined') xData['user_id'] = TypeTransformer.from('string')(data['userId']);
      if(typeof data['date'] !== 'undefined') xData['date'] = TypeTransformer.from('Date')(data['date']);
      if(typeof data['hour'] !== 'undefined') xData['hour'] = TypeTransformer.from('number')(data['hour']);
      if(typeof data['acdStatus'] !== 'undefined') xData['acd_status'] = TypeTransformer.from('ACDOperatorStatusStatisticsDetail[]')(data['acdStatus']);
      return xData;
},
    'ACDOperatorStatusStatisticsDetail': function(data){
      const xData = {};
      if(typeof data['OFFLINE'] !== 'undefined') xData['OFFLINE'] = TypeTransformer.from('ACDStatisticsItem')(data['OFFLINE']);
      if(typeof data['ONLINE'] !== 'undefined') xData['ONLINE'] = TypeTransformer.from('ACDStatisticsItem')(data['ONLINE']);
      if(typeof data['READY'] !== 'undefined') xData['READY'] = TypeTransformer.from('ACDStatisticsItem')(data['READY']);
      if(typeof data['BANNED'] !== 'undefined') xData['BANNED'] = TypeTransformer.from('ACDStatisticsItem')(data['BANNED']);
      if(typeof data['INSERVICE'] !== 'undefined') xData['IN_SERVICE'] = TypeTransformer.from('ACDStatisticsItem')(data['INSERVICE']);
      if(typeof data['AFTERSERVICE'] !== 'undefined') xData['AFTER_SERVICE'] = TypeTransformer.from('ACDStatisticsItem')(data['AFTERSERVICE']);
      if(typeof data['TIMEOUT'] !== 'undefined') xData['TIMEOUT'] = TypeTransformer.from('ACDStatisticsItem')(data['TIMEOUT']);
      if(typeof data['DND'] !== 'undefined') xData['DND'] = TypeTransformer.from('ACDStatisticsItem')(data['DND']);
      return xData;
},
    'ACDQueueStatistics': function(data){
      const xData = {};
      if(typeof data['date'] !== 'undefined') xData['date'] = TypeTransformer.from('Date')(data['date']);
      if(typeof data['hour'] !== 'undefined') xData['hour'] = TypeTransformer.from('number')(data['hour']);
      if(typeof data['WT'] !== 'undefined') xData['WT'] = TypeTransformer.from('ACDStatisticsItem')(data['WT']);
      if(typeof data['SA'] !== 'undefined') xData['SA'] = TypeTransformer.from('ACDStatisticsItem')(data['SA']);
      if(typeof data['AT'] !== 'undefined') xData['AT'] = TypeTransformer.from('ACDStatisticsItem')(data['AT']);
      if(typeof data['HT'] !== 'undefined') xData['HT'] = TypeTransformer.from('ACDStatisticsItem')(data['HT']);
      if(typeof data['TT'] !== 'undefined') xData['TT'] = TypeTransformer.from('ACDStatisticsItem')(data['TT']);
      if(typeof data['ACW'] !== 'undefined') xData['ACW'] = TypeTransformer.from('ACDStatisticsItem')(data['ACW']);
      if(typeof data['QL'] !== 'undefined') xData['QL'] = TypeTransformer.from('ACDStatisticsItem')(data['QL']);
      if(typeof data['TC'] !== 'undefined') xData['TC'] = TypeTransformer.from('number')(data['TC']);
      if(typeof data['AC'] !== 'undefined') xData['AC'] = TypeTransformer.from('ACDStatisticsCalls[]')(data['AC']);
      if(typeof data['UAC'] !== 'undefined') xData['UAC'] = TypeTransformer.from('ACDStatisticsCalls[]')(data['UAC']);
      if(typeof data['RC'] !== 'undefined') xData['RC'] = TypeTransformer.from('ACDStatisticsCalls[]')(data['RC']);
      if(typeof data['SL'] !== 'undefined') xData['SL'] = TypeTransformer.from('ACDQueueStatisticsServiceLevel[]')(data['SL']);
      if(typeof data['TWT'] !== 'undefined') xData['TWT'] = TypeTransformer.from('number')(data['TWT']);
      if(typeof data['TST'] !== 'undefined') xData['TST'] = TypeTransformer.from('number')(data['TST']);
      if(typeof data['TAT'] !== 'undefined') xData['TAT'] = TypeTransformer.from('number')(data['TAT']);
      if(typeof data['THT'] !== 'undefined') xData['THT'] = TypeTransformer.from('number')(data['THT']);
      if(typeof data['TTT'] !== 'undefined') xData['TTT'] = TypeTransformer.from('number')(data['TTT']);
      if(typeof data['TACW'] !== 'undefined') xData['TACW'] = TypeTransformer.from('number')(data['TACW']);
      return xData;
},
    'ACDQueueStatisticsServiceLevel': function(data){
      const xData = {};
      if(typeof data['acceptableWaitingTime'] !== 'undefined') xData['acceptable_waiting_time'] = TypeTransformer.from('number')(data['acceptableWaitingTime']);
      if(typeof data['callCount'] !== 'undefined') xData['call_count'] = TypeTransformer.from('number')(data['callCount']);
      if(typeof data['serviceLevel'] !== 'undefined') xData['service_level'] = TypeTransformer.from('number')(data['serviceLevel']);
      return xData;
},
    'ACDStatisticsItem': function(data){
      const xData = {};
      if(typeof data['min'] !== 'undefined') xData['min'] = TypeTransformer.from('number')(data['min']);
      if(typeof data['avg'] !== 'undefined') xData['avg'] = TypeTransformer.from('number')(data['avg']);
      if(typeof data['max'] !== 'undefined') xData['max'] = TypeTransformer.from('number')(data['max']);
      if(typeof data['count'] !== 'undefined') xData['count'] = TypeTransformer.from('number')(data['count']);
      if(typeof data['sum'] !== 'undefined') xData['sum'] = TypeTransformer.from('number')(data['sum']);
      return xData;
},
    'ACDStatisticsCalls': function(data){
      const xData = {};
      if(typeof data['count'] !== 'undefined') xData['count'] = TypeTransformer.from('number')(data['count']);
      if(typeof data['percent'] !== 'undefined') xData['percent'] = TypeTransformer.from('number')(data['percent']);
      return xData;
},
    'ACDQueueState': function(data){
      const xData = {};
      if(typeof data['acdQueueId'] !== 'undefined') xData['acd_queue_id'] = TypeTransformer.from('number')(data['acdQueueId']);
      if(typeof data['readyOperators'] !== 'undefined') xData['ready_operators'] = TypeTransformer.from('ACDReadyOperatorState[]')(data['readyOperators']);
      if(typeof data['readyOperatorsCount'] !== 'undefined') xData['ready_operators_count'] = TypeTransformer.from('number')(data['readyOperatorsCount']);
      if(typeof data['lockedOperators'] !== 'undefined') xData['locked_operators'] = TypeTransformer.from('ACDLockedOperatorState[]')(data['lockedOperators']);
      if(typeof data['lockedOperatorsCount'] !== 'undefined') xData['locked_operators_count'] = TypeTransformer.from('number')(data['lockedOperatorsCount']);
      if(typeof data['afterServiceOperators'] !== 'undefined') xData['after_service_operators'] = TypeTransformer.from('ACDAfterServiceOperatorState[]')(data['afterServiceOperators']);
      if(typeof data['afterServiceOperatorCount'] !== 'undefined') xData['after_service_operator_count'] = TypeTransformer.from('number')(data['afterServiceOperatorCount']);
      if(typeof data['servicingCalls'] !== 'undefined') xData['servicing_calls'] = TypeTransformer.from('ACDServicingCallState[]')(data['servicingCalls']);
      if(typeof data['waitingCalls'] !== 'undefined') xData['waiting_calls'] = TypeTransformer.from('ACDWaitingCallState[]')(data['waitingCalls']);
      return xData;
},
    'ACDReadyOperatorState': function(data){
      const xData = {};
      if(typeof data['userId'] !== 'undefined') xData['user_id'] = TypeTransformer.from('number')(data['userId']);
      if(typeof data['userName'] !== 'undefined') xData['user_name'] = TypeTransformer.from('string')(data['userName']);
      if(typeof data['userDisplayName'] !== 'undefined') xData['user_display_name'] = TypeTransformer.from('string')(data['userDisplayName']);
      if(typeof data['idleDuration'] !== 'undefined') xData['idle_duration'] = TypeTransformer.from('number')(data['idleDuration']);
      return xData;
},
    'ACDLockedOperatorState': function(data){
      const xData = {};
      if(typeof data['userId'] !== 'undefined') xData['user_id'] = TypeTransformer.from('number')(data['userId']);
      if(typeof data['userName'] !== 'undefined') xData['user_name'] = TypeTransformer.from('string')(data['userName']);
      if(typeof data['userDisplayName'] !== 'undefined') xData['user_display_name'] = TypeTransformer.from('string')(data['userDisplayName']);
      if(typeof data['unreached'] !== 'undefined') xData['unreached'] = TypeTransformer.from('Date')(data['unreached']);
      if(typeof data['locks'] !== 'undefined') xData['locks'] = TypeTransformer.from('ACDLock[]')(data['locks']);
      if(typeof data['acdCalls'] !== 'undefined') xData['acd_calls'] = TypeTransformer.from('ACDOperatorCall[]')(data['acdCalls']);
      if(typeof data['status'] !== 'undefined') xData['status'] = TypeTransformer.from('string')(data['status']);
      return xData;
},
    'ACDAfterServiceOperatorState': function(data){
      const xData = {};
      if(typeof data['userId'] !== 'undefined') xData['user_id'] = TypeTransformer.from('number')(data['userId']);
      if(typeof data['userName'] !== 'undefined') xData['user_name'] = TypeTransformer.from('string')(data['userName']);
      if(typeof data['userDisplayName'] !== 'undefined') xData['user_display_name'] = TypeTransformer.from('string')(data['userDisplayName']);
      if(typeof data['status'] !== 'undefined') xData['status'] = TypeTransformer.from('string')(data['status']);
      return xData;
},
    'ACDLock': function(data){
      const xData = {};
      if(typeof data['id'] !== 'undefined') xData['id'] = TypeTransformer.from('string')(data['id']);
      if(typeof data['created'] !== 'undefined') xData['created'] = TypeTransformer.from('Date')(data['created']);
      return xData;
},
    'ACDOperatorCall': function(data){
      const xData = {};
      if(typeof data['acdSessionHistoryId'] !== 'undefined') xData['acd_session_history_id'] = TypeTransformer.from('number')(data['acdSessionHistoryId']);
      if(typeof data['acdRequestId'] !== 'undefined') xData['acd_request_id'] = TypeTransformer.from('string')(data['acdRequestId']);
      if(typeof data['acdQueueId'] !== 'undefined') xData['acd_queue_id'] = TypeTransformer.from('number')(data['acdQueueId']);
      if(typeof data['acdQueueName'] !== 'undefined') xData['acd_queue_name'] = TypeTransformer.from('string')(data['acdQueueName']);
      if(typeof data['callerid'] !== 'undefined') xData['callerid'] = TypeTransformer.from('string')(data['callerid']);
      if(typeof data['beginTime'] !== 'undefined') xData['begin_time'] = TypeTransformer.from('Date')(data['beginTime']);
      if(typeof data['submitted'] !== 'undefined') xData['submitted'] = TypeTransformer.from('Date')(data['submitted']);
      return xData;
},
    'ACDServicingCallState': function(data){
      const xData = {};
      if(typeof data['userId'] !== 'undefined') xData['user_id'] = TypeTransformer.from('number')(data['userId']);
      if(typeof data['userName'] !== 'undefined') xData['user_name'] = TypeTransformer.from('string')(data['userName']);
      if(typeof data['userDisplayName'] !== 'undefined') xData['user_display_name'] = TypeTransformer.from('string')(data['userDisplayName']);
      if(typeof data['priority'] !== 'undefined') xData['priority'] = TypeTransformer.from('number')(data['priority']);
      if(typeof data['callerid'] !== 'undefined') xData['callerid'] = TypeTransformer.from('string')(data['callerid']);
      if(typeof data['beginTime'] !== 'undefined') xData['begin_time'] = TypeTransformer.from('Date')(data['beginTime']);
      if(typeof data['waitingTime'] !== 'undefined') xData['waiting_time'] = TypeTransformer.from('number')(data['waitingTime']);
      if(typeof data['acdSessionHistoryId'] !== 'undefined') xData['acd_session_history_id'] = TypeTransformer.from('number')(data['acdSessionHistoryId']);
      return xData;
},
    'ACDWaitingCallState': function(data){
      const xData = {};
      if(typeof data['userId'] !== 'undefined') xData['user_id'] = TypeTransformer.from('number')(data['userId']);
      if(typeof data['userName'] !== 'undefined') xData['user_name'] = TypeTransformer.from('string')(data['userName']);
      if(typeof data['userDisplayName'] !== 'undefined') xData['user_display_name'] = TypeTransformer.from('string')(data['userDisplayName']);
      if(typeof data['priority'] !== 'undefined') xData['priority'] = TypeTransformer.from('number')(data['priority']);
      if(typeof data['callerid'] !== 'undefined') xData['callerid'] = TypeTransformer.from('string')(data['callerid']);
      if(typeof data['beginTime'] !== 'undefined') xData['begin_time'] = TypeTransformer.from('Date')(data['beginTime']);
      if(typeof data['waitingTime'] !== 'undefined') xData['waiting_time'] = TypeTransformer.from('number')(data['waitingTime']);
      if(typeof data['minutesToSubmit'] !== 'undefined') xData['minutes_to_submit'] = TypeTransformer.from('number')(data['minutesToSubmit']);
      if(typeof data['acdSessionHistoryId'] !== 'undefined') xData['acd_session_history_id'] = TypeTransformer.from('number')(data['acdSessionHistoryId']);
      return xData;
},
    'NewPhoneInfo': function(data){
      const xData = {};
      if(typeof data['phoneId'] !== 'undefined') xData['phone_id'] = TypeTransformer.from('number')(data['phoneId']);
      if(typeof data['phoneNumber'] !== 'undefined') xData['phone_number'] = TypeTransformer.from('string')(data['phoneNumber']);
      if(typeof data['phonePrice'] !== 'undefined') xData['phone_price'] = TypeTransformer.from('number')(data['phonePrice']);
      if(typeof data['phoneInstallationPrice'] !== 'undefined') xData['phone_installation_price'] = TypeTransformer.from('number')(data['phoneInstallationPrice']);
      if(typeof data['phoneCountryCode'] !== 'undefined') xData['phone_country_code'] = TypeTransformer.from('string')(data['phoneCountryCode']);
      if(typeof data['phonePeriod'] !== 'undefined') xData['phone_period'] = TypeTransformer.from('string')(data['phonePeriod']);
      if(typeof data['phoneCategoryName'] !== 'undefined') xData['phone_category_name'] = TypeTransformer.from('string')(data['phoneCategoryName']);
      if(typeof data['phoneRegionName'] !== 'undefined') xData['phone_region_name'] = TypeTransformer.from('string')(data['phoneRegionName']);
      return xData;
},
    'AttachedPhoneInfo': function(data){
      const xData = {};
      if(typeof data['phoneId'] !== 'undefined') xData['phone_id'] = TypeTransformer.from('number')(data['phoneId']);
      if(typeof data['phoneNumber'] !== 'undefined') xData['phone_number'] = TypeTransformer.from('string')(data['phoneNumber']);
      if(typeof data['phonePrice'] !== 'undefined') xData['phone_price'] = TypeTransformer.from('number')(data['phonePrice']);
      if(typeof data['phoneCountryCode'] !== 'undefined') xData['phone_country_code'] = TypeTransformer.from('string')(data['phoneCountryCode']);
      if(typeof data['phoneNextRenewal'] !== 'undefined') xData['phone_next_renewal'] = TypeTransformer.from('Date')(data['phoneNextRenewal']);
      if(typeof data['phonePurchaseDate'] !== 'undefined') xData['phone_purchase_date'] = TypeTransformer.from('Date')(data['phonePurchaseDate']);
      if(typeof data['deactivated'] !== 'undefined') xData['deactivated'] = TypeTransformer.from('boolean')(data['deactivated']);
      if(typeof data['canceled'] !== 'undefined') xData['canceled'] = TypeTransformer.from('boolean')(data['canceled']);
      if(typeof data['autoCharge'] !== 'undefined') xData['auto_charge'] = TypeTransformer.from('boolean')(data['autoCharge']);
      if(typeof data['applicationId'] !== 'undefined') xData['application_id'] = TypeTransformer.from('number')(data['applicationId']);
      if(typeof data['applicationName'] !== 'undefined') xData['application_name'] = TypeTransformer.from('string')(data['applicationName']);
      if(typeof data['ruleId'] !== 'undefined') xData['rule_id'] = TypeTransformer.from('number')(data['ruleId']);
      if(typeof data['ruleName'] !== 'undefined') xData['rule_name'] = TypeTransformer.from('string')(data['ruleName']);
      if(typeof data['categoryName'] !== 'undefined') xData['category_name'] = TypeTransformer.from('string')(data['categoryName']);
      if(typeof data['requiredVerification'] !== 'undefined') xData['required_verification'] = TypeTransformer.from('string')(data['requiredVerification']);
      if(typeof data['verificationStatus'] !== 'undefined') xData['verification_status'] = TypeTransformer.from('string')(data['verificationStatus']);
      if(typeof data['unverifiedHoldUntil'] !== 'undefined') xData['unverified_hold_until'] = TypeTransformer.from('Date')(data['unverifiedHoldUntil']);
      if(typeof data['canBeUsed'] !== 'undefined') xData['can_be_used'] = TypeTransformer.from('boolean')(data['canBeUsed']);
      if(typeof data['isSmsSupported'] !== 'undefined') xData['is_sms_supported'] = TypeTransformer.from('boolean')(data['isSmsSupported']);
      if(typeof data['isSmsEnabled'] !== 'undefined') xData['is_sms_enabled'] = TypeTransformer.from('boolean')(data['isSmsEnabled']);
      return xData;
},
    'NewAttachedPhoneInfo': function(data){
      const xData = {};
      if(typeof data['phoneId'] !== 'undefined') xData['phone_id'] = TypeTransformer.from('number')(data['phoneId']);
      if(typeof data['phoneNumber'] !== 'undefined') xData['phone_number'] = TypeTransformer.from('string')(data['phoneNumber']);
      if(typeof data['requiredVerification'] !== 'undefined') xData['required_verification'] = TypeTransformer.from('string')(data['requiredVerification']);
      if(typeof data['verificationStatus'] !== 'undefined') xData['verification_status'] = TypeTransformer.from('string')(data['verificationStatus']);
      if(typeof data['unverifiedHoldUntil'] !== 'undefined') xData['unverified_hold_until'] = TypeTransformer.from('Date')(data['unverifiedHoldUntil']);
      return xData;
},
    'PhoneNumberCountryInfo': function(data){
      const xData = {};
      if(typeof data['countryCode'] !== 'undefined') xData['country_code'] = TypeTransformer.from('string')(data['countryCode']);
      if(typeof data['phonePrefix'] !== 'undefined') xData['phone_prefix'] = TypeTransformer.from('string')(data['phonePrefix']);
      if(typeof data['canListPhoneNumbers'] !== 'undefined') xData['can_list_phone_numbers'] = TypeTransformer.from('boolean')(data['canListPhoneNumbers']);
      if(typeof data['phoneCategories'] !== 'undefined') xData['phone_categories'] = TypeTransformer.from('PhoneNumberCountryCategoryInfo[]')(data['phoneCategories']);
      return xData;
},
    'PhoneNumberCountryCategoryInfo': function(data){
      const xData = {};
      if(typeof data['phoneCategoryName'] !== 'undefined') xData['phone_category_name'] = TypeTransformer.from('string')(data['phoneCategoryName']);
      if(typeof data['countryHasStates'] !== 'undefined') xData['country_has_states'] = TypeTransformer.from('boolean')(data['countryHasStates']);
      return xData;
},
    'PhoneNumberCountryStateInfo': function(data){
      const xData = {};
      if(typeof data['countryState'] !== 'undefined') xData['country_state'] = TypeTransformer.from('string')(data['countryState']);
      if(typeof data['countryStateName'] !== 'undefined') xData['country_state_name'] = TypeTransformer.from('string')(data['countryStateName']);
      return xData;
},
    'PhoneNumberCountryRegionInfo': function(data){
      const xData = {};
      if(typeof data['phoneRegionId'] !== 'undefined') xData['phone_region_id'] = TypeTransformer.from('number')(data['phoneRegionId']);
      if(typeof data['phoneRegionName'] !== 'undefined') xData['phone_region_name'] = TypeTransformer.from('string')(data['phoneRegionName']);
      if(typeof data['phoneRegionCode'] !== 'undefined') xData['phone_region_code'] = TypeTransformer.from('string')(data['phoneRegionCode']);
      if(typeof data['phoneCount'] !== 'undefined') xData['phone_count'] = TypeTransformer.from('number')(data['phoneCount']);
      if(typeof data['verificationStatus'] !== 'undefined') xData['verification_status'] = TypeTransformer.from('string')(data['verificationStatus']);
      if(typeof data['requiredVerification'] !== 'undefined') xData['required_verification'] = TypeTransformer.from('string')(data['requiredVerification']);
      if(typeof data['phonePrice'] !== 'undefined') xData['phone_price'] = TypeTransformer.from('number')(data['phonePrice']);
      if(typeof data['phoneInstallationPrice'] !== 'undefined') xData['phone_installation_price'] = TypeTransformer.from('number')(data['phoneInstallationPrice']);
      if(typeof data['phonePeriod'] !== 'undefined') xData['phone_period'] = TypeTransformer.from('string')(data['phonePeriod']);
      if(typeof data['isNeedRegulationAddress'] !== 'undefined') xData['is_need_regulation_address'] = TypeTransformer.from('boolean')(data['isNeedRegulationAddress']);
      if(typeof data['regulationAddressType'] !== 'undefined') xData['regulation_address_type'] = TypeTransformer.from('string')(data['regulationAddressType']);
      if(typeof data['isSmsSupported'] !== 'undefined') xData['is_sms_supported'] = TypeTransformer.from('boolean')(data['isSmsSupported']);
      if(typeof data['multipleNumbersPrice'] !== 'undefined') xData['multiple_numbers_price'] = TypeTransformer.from('MultipleNumbersPrice[]')(data['multipleNumbersPrice']);
      return xData;
},
    'MultipleNumbersPrice': function(data){
      const xData = {};
      if(typeof data['count'] !== 'undefined') xData['count'] = TypeTransformer.from('number')(data['count']);
      if(typeof data['price'] !== 'undefined') xData['price'] = TypeTransformer.from('number')(data['price']);
      if(typeof data['installationPrice'] !== 'undefined') xData['installation_price'] = TypeTransformer.from('number')(data['installationPrice']);
      return xData;
},
    'CallerIDInfo': function(data){
      const xData = {};
      if(typeof data['calleridId'] !== 'undefined') xData['callerid_id'] = TypeTransformer.from('number')(data['calleridId']);
      if(typeof data['calleridNumber'] !== 'undefined') xData['callerid_number'] = TypeTransformer.from('string')(data['calleridNumber']);
      if(typeof data['active'] !== 'undefined') xData['active'] = TypeTransformer.from('boolean')(data['active']);
      if(typeof data['codeEnteringAttemptsLeft'] !== 'undefined') xData['code_entering_attempts_left'] = TypeTransformer.from('number')(data['codeEnteringAttemptsLeft']);
      if(typeof data['verificationCallAttemptsLeft'] !== 'undefined') xData['verification_call_attempts_left'] = TypeTransformer.from('number')(data['verificationCallAttemptsLeft']);
      if(typeof data['verifiedUntil'] !== 'undefined') xData['verified_until'] = TypeTransformer.from('Date')(data['verifiedUntil']);
      return xData;
},
    'ContactInfo': function(data){
      const xData = {};
      if(typeof data['contactId'] !== 'undefined') xData['contact_id'] = TypeTransformer.from('number')(data['contactId']);
      if(typeof data['contactType'] !== 'undefined') xData['contact_type'] = TypeTransformer.from('string')(data['contactType']);
      if(typeof data['contactData'] !== 'undefined') xData['contact_data'] = TypeTransformer.from('string')(data['contactData']);
      if(typeof data['isPersistent'] !== 'undefined') xData['is_persistent'] = TypeTransformer.from('boolean')(data['isPersistent']);
      if(typeof data['description'] !== 'undefined') xData['description'] = TypeTransformer.from('string')(data['description']);
      if(typeof data['nextVerificationAfterSec'] !== 'undefined') xData['next_verification_after_sec'] = TypeTransformer.from('number')(data['nextVerificationAfterSec']);
      if(typeof data['verified'] !== 'undefined') xData['verified'] = TypeTransformer.from('Date')(data['verified']);
      if(typeof data['notificationGroup'] !== 'undefined') xData['notification_group'] = TypeTransformer.from('string[]')(data['notificationGroup']);
      if(typeof data['created'] !== 'undefined') xData['created'] = TypeTransformer.from('Date')(data['created']);
      if(typeof data['modified'] !== 'undefined') xData['modified'] = TypeTransformer.from('Date')(data['modified']);
      return xData;
},
    'ACDQueueOperatorInfo': function(data){
      const xData = {};
      if(typeof data['acdQueueId'] !== 'undefined') xData['acd_queue_id'] = TypeTransformer.from('number')(data['acdQueueId']);
      if(typeof data['acdQueueName'] !== 'undefined') xData['acd_queue_name'] = TypeTransformer.from('string')(data['acdQueueName']);
      if(typeof data['autoLink'] !== 'undefined') xData['auto_link'] = TypeTransformer.from('boolean')(data['autoLink']);
      return xData;
},
    'ClonedACDQueue': function(data){
      const xData = {};
      if(typeof data['acdQueueId'] !== 'undefined') xData['acd_queue_id'] = TypeTransformer.from('number')(data['acdQueueId']);
      if(typeof data['acdQueueName'] !== 'undefined') xData['acd_queue_name'] = TypeTransformer.from('string')(data['acdQueueName']);
      return xData;
},
    'SkillInfo': function(data){
      const xData = {};
      if(typeof data['skillId'] !== 'undefined') xData['skill_id'] = TypeTransformer.from('number')(data['skillId']);
      if(typeof data['skillName'] !== 'undefined') xData['skill_name'] = TypeTransformer.from('string')(data['skillName']);
      return xData;
},
    'ClonedACDSkill': function(data){
      const xData = {};
      if(typeof data['skillId'] !== 'undefined') xData['skill_id'] = TypeTransformer.from('number')(data['skillId']);
      if(typeof data['skillName'] !== 'undefined') xData['skill_name'] = TypeTransformer.from('string')(data['skillName']);
      return xData;
},
    'ExchangeRates': function(data){
      const xData = {};
      if(typeof data['RUR'] !== 'undefined') xData['RUR'] = TypeTransformer.from('number')(data['RUR']);
      if(typeof data['EUR'] !== 'undefined') xData['EUR'] = TypeTransformer.from('number')(data['EUR']);
      if(typeof data['USD'] !== 'undefined') xData['USD'] = TypeTransformer.from('number')(data['USD']);
      return xData;
},
    'ResourcePrice': function(data){
      const xData = {};
      if(typeof data['resourceType'] !== 'undefined') xData['resource_type'] = TypeTransformer.from('string')(data['resourceType']);
      if(typeof data['priceGroups'] !== 'undefined') xData['price_groups'] = TypeTransformer.from('PriceGroup[]')(data['priceGroups']);
      return xData;
},
    'PriceGroup': function(data){
      const xData = {};
      if(typeof data['priceGroupName'] !== 'undefined') xData['price_group_name'] = TypeTransformer.from('string')(data['priceGroupName']);
      if(typeof data['priceGroupId'] !== 'undefined') xData['price_group_id'] = TypeTransformer.from('number')(data['priceGroupId']);
      if(typeof data['price'] !== 'undefined') xData['price'] = TypeTransformer.from('number')(data['price']);
      if(typeof data['numResourcesPerPrice'] !== 'undefined') xData['num_resources_per_price'] = TypeTransformer.from('number')(data['numResourcesPerPrice']);
      if(typeof data['quantum'] !== 'undefined') xData['quantum'] = TypeTransformer.from('number')(data['quantum']);
      if(typeof data['params'] !== 'undefined') xData['params'] = TypeTransformer.from('ResourceParams')(data['params']);
      return xData;
},
    'ResourceParams': function(data){
      const xData = {};
      if(typeof data['allowed'] !== 'undefined') xData['allowed'] = TypeTransformer.from('string[]')(data['allowed']);
      if(typeof data['forbidden'] !== 'undefined') xData['forbidden'] = TypeTransformer.from('string[]')(data['forbidden']);
      if(typeof data['requested'] !== 'undefined') xData['requested'] = TypeTransformer.from('string[]')(data['requested']);
      return xData;
},
    'CallList': function(data){
      const xData = {};
      if(typeof data['listId'] !== 'undefined') xData['list_id'] = TypeTransformer.from('number')(data['listId']);
      if(typeof data['listName'] !== 'undefined') xData['list_name'] = TypeTransformer.from('string')(data['listName']);
      if(typeof data['priority'] !== 'undefined') xData['priority'] = TypeTransformer.from('number')(data['priority']);
      if(typeof data['ruleId'] !== 'undefined') xData['rule_id'] = TypeTransformer.from('number')(data['ruleId']);
      if(typeof data['maxSimultaneous'] !== 'undefined') xData['max_simultaneous'] = TypeTransformer.from('number')(data['maxSimultaneous']);
      if(typeof data['numAttempts'] !== 'undefined') xData['num_attempts'] = TypeTransformer.from('number')(data['numAttempts']);
      if(typeof data['dtSubmit'] !== 'undefined') xData['dt_submit'] = TypeTransformer.from('Date')(data['dtSubmit']);
      if(typeof data['dtComplete'] !== 'undefined') xData['dt_complete'] = TypeTransformer.from('Date')(data['dtComplete']);
      if(typeof data['intervalSeconds'] !== 'undefined') xData['interval_seconds'] = TypeTransformer.from('number')(data['intervalSeconds']);
      if(typeof data['status'] !== 'undefined') xData['status'] = TypeTransformer.from('string')(data['status']);
      return xData;
},
    'CallListDetail': function(data){
      const xData = {};
      if(typeof data['listId'] !== 'undefined') xData['list_id'] = TypeTransformer.from('number')(data['listId']);
      if(typeof data['customData'] !== 'undefined') xData['custom_data'] = TypeTransformer.from('string')(data['customData']);
      if(typeof data['startExecutionTime'] !== 'undefined') xData['start_execution_time'] = TypeTransformer.from('string')(data['startExecutionTime']);
      if(typeof data['finishExecutionTime'] !== 'undefined') xData['finish_execution_time'] = TypeTransformer.from('string')(data['finishExecutionTime']);
      if(typeof data['resultData'] !== 'undefined') xData['result_data'] = TypeTransformer.from('string')(data['resultData']);
      if(typeof data['lastAttempt'] !== 'undefined') xData['last_attempt'] = TypeTransformer.from('string')(data['lastAttempt']);
      if(typeof data['attemptsLeft'] !== 'undefined') xData['attempts_left'] = TypeTransformer.from('number')(data['attemptsLeft']);
      if(typeof data['statusId'] !== 'undefined') xData['status_id'] = TypeTransformer.from('number')(data['statusId']);
      if(typeof data['status'] !== 'undefined') xData['status'] = TypeTransformer.from('string')(data['status']);
      return xData;
},
    'SIPRegistration': function(data){
      const xData = {};
      if(typeof data['sipRegistrationId'] !== 'undefined') xData['sip_registration_id'] = TypeTransformer.from('number')(data['sipRegistrationId']);
      if(typeof data['sipUsername'] !== 'undefined') xData['sip_username'] = TypeTransformer.from('string')(data['sipUsername']);
      if(typeof data['proxy'] !== 'undefined') xData['proxy'] = TypeTransformer.from('string')(data['proxy']);
      if(typeof data['lastUpdated'] !== 'undefined') xData['last_updated'] = TypeTransformer.from('number')(data['lastUpdated']);
      if(typeof data['authUser'] !== 'undefined') xData['auth_user'] = TypeTransformer.from('string')(data['authUser']);
      if(typeof data['outboundProxy'] !== 'undefined') xData['outbound_proxy'] = TypeTransformer.from('string')(data['outboundProxy']);
      if(typeof data['successful'] !== 'undefined') xData['successful'] = TypeTransformer.from('boolean')(data['successful']);
      if(typeof data['statusCode'] !== 'undefined') xData['status_code'] = TypeTransformer.from('number')(data['statusCode']);
      if(typeof data['errorMessage'] !== 'undefined') xData['error_message'] = TypeTransformer.from('string')(data['errorMessage']);
      if(typeof data['deactivated'] !== 'undefined') xData['deactivated'] = TypeTransformer.from('boolean')(data['deactivated']);
      if(typeof data['nextSubscriptionRenewal'] !== 'undefined') xData['next_subscription_renewal'] = TypeTransformer.from('Date')(data['nextSubscriptionRenewal']);
      if(typeof data['purchaseDate'] !== 'undefined') xData['purchase_date'] = TypeTransformer.from('Date')(data['purchaseDate']);
      if(typeof data['subscriptionPrice'] !== 'undefined') xData['subscription_price'] = TypeTransformer.from('string')(data['subscriptionPrice']);
      if(typeof data['isPersistent'] !== 'undefined') xData['is_persistent'] = TypeTransformer.from('boolean')(data['isPersistent']);
      if(typeof data['userId'] !== 'undefined') xData['user_id'] = TypeTransformer.from('number')(data['userId']);
      if(typeof data['userName'] !== 'undefined') xData['user_name'] = TypeTransformer.from('string')(data['userName']);
      if(typeof data['applicationId'] !== 'undefined') xData['application_id'] = TypeTransformer.from('number')(data['applicationId']);
      if(typeof data['applicationName'] !== 'undefined') xData['application_name'] = TypeTransformer.from('string')(data['applicationName']);
      if(typeof data['ruleId'] !== 'undefined') xData['rule_id'] = TypeTransformer.from('number')(data['ruleId']);
      if(typeof data['ruleName'] !== 'undefined') xData['rule_name'] = TypeTransformer.from('string')(data['ruleName']);
      return xData;
},
    'AdminRole': function(data){
      const xData = {};
      if(typeof data['adminRoleId'] !== 'undefined') xData['admin_role_id'] = TypeTransformer.from('number')(data['adminRoleId']);
      if(typeof data['adminRoleName'] !== 'undefined') xData['admin_role_name'] = TypeTransformer.from('string')(data['adminRoleName']);
      if(typeof data['adminRoleActive'] !== 'undefined') xData['admin_role_active'] = TypeTransformer.from('boolean')(data['adminRoleActive']);
      if(typeof data['systemRole'] !== 'undefined') xData['system_role'] = TypeTransformer.from('boolean')(data['systemRole']);
      if(typeof data['modified'] !== 'undefined') xData['modified'] = TypeTransformer.from('Date')(data['modified']);
      if(typeof data['allowedEntries'] !== 'undefined') xData['allowed_entries'] = TypeTransformer.from('string[]')(data['allowedEntries']);
      if(typeof data['deniedEntries'] !== 'undefined') xData['denied_entries'] = TypeTransformer.from('string[]')(data['deniedEntries']);
      return xData;
},
    'ClonedAdminRole': function(data){
      const xData = {};
      if(typeof data['adminRoleId'] !== 'undefined') xData['admin_role_id'] = TypeTransformer.from('number')(data['adminRoleId']);
      if(typeof data['adminRoleName'] !== 'undefined') xData['admin_role_name'] = TypeTransformer.from('string')(data['adminRoleName']);
      return xData;
},
    'AdminUser': function(data){
      const xData = {};
      if(typeof data['adminUserId'] !== 'undefined') xData['admin_user_id'] = TypeTransformer.from('number')(data['adminUserId']);
      if(typeof data['adminUserName'] !== 'undefined') xData['admin_user_name'] = TypeTransformer.from('string')(data['adminUserName']);
      if(typeof data['adminUserDisplayName'] !== 'undefined') xData['admin_user_display_name'] = TypeTransformer.from('string')(data['adminUserDisplayName']);
      if(typeof data['adminUserActive'] !== 'undefined') xData['admin_user_active'] = TypeTransformer.from('boolean')(data['adminUserActive']);
      if(typeof data['modified'] !== 'undefined') xData['modified'] = TypeTransformer.from('Date')(data['modified']);
      if(typeof data['accessEntries'] !== 'undefined') xData['access_entries'] = TypeTransformer.from('string[]')(data['accessEntries']);
      if(typeof data['adminRoles'] !== 'undefined') xData['admin_roles'] = TypeTransformer.from('AdminRole[]')(data['adminRoles']);
      return xData;
},
    'ClonedAdminUser': function(data){
      const xData = {};
      if(typeof data['adminUserId'] !== 'undefined') xData['admin_user_id'] = TypeTransformer.from('number')(data['adminUserId']);
      if(typeof data['adminUserName'] !== 'undefined') xData['admin_user_name'] = TypeTransformer.from('string')(data['adminUserName']);
      if(typeof data['adminUserApiKey'] !== 'undefined') xData['admin_user_api_key'] = TypeTransformer.from('string')(data['adminUserApiKey']);
      return xData;
},
    'GetMoneyAmountToChargeResult': function(data){
      const xData = {};
      if(typeof data['amount'] !== 'undefined') xData['amount'] = TypeTransformer.from('number')(data['amount']);
      if(typeof data['minAmount'] !== 'undefined') xData['min_amount'] = TypeTransformer.from('number')(data['minAmount']);
      if(typeof data['bankCardAmountUsd'] !== 'undefined') xData['bank_card_amount_usd'] = TypeTransformer.from('number')(data['bankCardAmountUsd']);
      if(typeof data['minBankCardAmountUsd'] !== 'undefined') xData['min_bank_card_amount_usd'] = TypeTransformer.from('number')(data['minBankCardAmountUsd']);
      if(typeof data['robokassaAmountRub'] !== 'undefined') xData['robokassa_amount_rub'] = TypeTransformer.from('number')(data['robokassaAmountRub']);
      if(typeof data['minRobokassaAmountRub'] !== 'undefined') xData['min_robokassa_amount_rub'] = TypeTransformer.from('number')(data['minRobokassaAmountRub']);
      if(typeof data['subscriptions'] !== 'undefined') xData['subscriptions'] = TypeTransformer.from('SubscriptionsToCharge[]')(data['subscriptions']);
      return xData;
},
    'ChargeAccountResult': function(data){
      const xData = {};
      if(typeof data['chargedAmount'] !== 'undefined') xData['charged_amount'] = TypeTransformer.from('number')(data['chargedAmount']);
      if(typeof data['phones'] !== 'undefined') xData['phones'] = TypeTransformer.from('ChargedPhone[]')(data['phones']);
      return xData;
},
    'ChargedPhone': function(data){
      const xData = {};
      if(typeof data['phoneId'] !== 'undefined') xData['phone_id'] = TypeTransformer.from('number')(data['phoneId']);
      if(typeof data['phoneNumber'] !== 'undefined') xData['phone_number'] = TypeTransformer.from('string')(data['phoneNumber']);
      if(typeof data['deactivated'] !== 'undefined') xData['deactivated'] = TypeTransformer.from('boolean')(data['deactivated']);
      if(typeof data['isCharged'] !== 'undefined') xData['is_charged'] = TypeTransformer.from('boolean')(data['isCharged']);
      return xData;
},
    'SubscriptionsToCharge': function(data){
      const xData = {};
      if(typeof data['subscriptionAmount'] !== 'undefined') xData['subscription_amount'] = TypeTransformer.from('number')(data['subscriptionAmount']);
      if(typeof data['subscriptionType'] !== 'undefined') xData['subscription_type'] = TypeTransformer.from('string')(data['subscriptionType']);
      if(typeof data['subscriptionDescription'] !== 'undefined') xData['subscription_description'] = TypeTransformer.from('string')(data['subscriptionDescription']);
      if(typeof data['subscriptionAutoCharge'] !== 'undefined') xData['subscription_auto_charge'] = TypeTransformer.from('boolean')(data['subscriptionAutoCharge']);
      if(typeof data['subscriptionNextRenewal'] !== 'undefined') xData['subscription_next_renewal'] = TypeTransformer.from('Date')(data['subscriptionNextRenewal']);
      return xData;
},
    'AuthorizedAccountIP': function(data){
      const xData = {};
      if(typeof data['authorizedIp'] !== 'undefined') xData['authorized_ip'] = TypeTransformer.from('string')(data['authorizedIp']);
      if(typeof data['allowed'] !== 'undefined') xData['allowed'] = TypeTransformer.from('boolean')(data['allowed']);
      if(typeof data['created'] !== 'undefined') xData['created'] = TypeTransformer.from('Date')(data['created']);
      return xData;
},
    'AccountVerificationDocument': function(data){
      const xData = {};
      if(typeof data['accountDocumentId'] !== 'undefined') xData['account_document_id'] = TypeTransformer.from('number')(data['accountDocumentId']);
      if(typeof data['isIndividual'] !== 'undefined') xData['is_individual'] = TypeTransformer.from('boolean')(data['isIndividual']);
      if(typeof data['comment'] !== 'undefined') xData['comment'] = TypeTransformer.from('string')(data['comment']);
      if(typeof data['uploaded'] !== 'undefined') xData['uploaded'] = TypeTransformer.from('Date')(data['uploaded']);
      if(typeof data['accountDocumentStatus'] !== 'undefined') xData['account_document_status'] = TypeTransformer.from('string')(data['accountDocumentStatus']);
      return xData;
},
    'AccountVerification': function(data){
      const xData = {};
      if(typeof data['verificationName'] !== 'undefined') xData['verification_name'] = TypeTransformer.from('string')(data['verificationName']);
      if(typeof data['verificationStatus'] !== 'undefined') xData['verification_status'] = TypeTransformer.from('string')(data['verificationStatus']);
      if(typeof data['unverifiedHoldUntil'] !== 'undefined') xData['unverified_hold_until'] = TypeTransformer.from('Date')(data['unverifiedHoldUntil']);
      if(typeof data['documents'] !== 'undefined') xData['documents'] = TypeTransformer.from('AccountVerificationDocument[]')(data['documents']);
      return xData;
},
    'AccountVerifications': function(data){
      const xData = {};
      if(typeof data['accountId'] !== 'undefined') xData['account_id'] = TypeTransformer.from('number')(data['accountId']);
      if(typeof data['verifications'] !== 'undefined') xData['verifications'] = TypeTransformer.from('AccountVerification[]')(data['verifications']);
      return xData;
},
    'SubscriptionTemplate': function(data){
      const xData = {};
      if(typeof data['subscriptionTemplateId'] !== 'undefined') xData['subscription_template_id'] = TypeTransformer.from('number')(data['subscriptionTemplateId']);
      if(typeof data['installationPrice'] !== 'undefined') xData['installation_price'] = TypeTransformer.from('number')(data['installationPrice']);
      if(typeof data['period'] !== 'undefined') xData['period'] = TypeTransformer.from('string')(data['period']);
      if(typeof data['subscriptionTemplateType'] !== 'undefined') xData['subscription_template_type'] = TypeTransformer.from('string')(data['subscriptionTemplateType']);
      if(typeof data['subscriptionTemplateName'] !== 'undefined') xData['subscription_template_name'] = TypeTransformer.from('string')(data['subscriptionTemplateName']);
      return xData;
},
    'AccountCallbacks': function(data){
      const xData = {};
      if(typeof data['callbacks'] !== 'undefined') xData['callbacks'] = TypeTransformer.from('AccountCallback[]')(data['callbacks']);
      return xData;
},
    'AccountCallback': function(data){
      const xData = {};
      if(typeof data['callbackId'] !== 'undefined') xData['callback_id'] = TypeTransformer.from('number')(data['callbackId']);
      if(typeof data['type'] !== 'undefined') xData['type'] = TypeTransformer.from('string')(data['type']);
      if(typeof data['accountId'] !== 'undefined') xData['account_id'] = TypeTransformer.from('number')(data['accountId']);
      if(typeof data['hash'] !== 'undefined') xData['hash'] = TypeTransformer.from('string')(data['hash']);
      if(typeof data['accountName'] !== 'undefined') xData['account_name'] = TypeTransformer.from('string')(data['accountName']);
      if(typeof data['accountEmail'] !== 'undefined') xData['account_email'] = TypeTransformer.from('string')(data['accountEmail']);
      if(typeof data['languageCode'] !== 'undefined') xData['language_code'] = TypeTransformer.from('string')(data['languageCode']);
      if(typeof data['accountFirstName'] !== 'undefined') xData['account_first_name'] = TypeTransformer.from('string')(data['accountFirstName']);
      if(typeof data['accountLastName'] !== 'undefined') xData['account_last_name'] = TypeTransformer.from('string')(data['accountLastName']);
      if(typeof data['balance'] !== 'undefined') xData['balance'] = TypeTransformer.from('number')(data['balance']);
      if(typeof data['currency'] !== 'undefined') xData['currency'] = TypeTransformer.from('string')(data['currency']);
      if(typeof data['accountDocumentUploaded'] !== 'undefined') xData['account_document_uploaded'] = TypeTransformer.from('AccountDocumentUploadedCallback')(data['accountDocumentUploaded']);
      if(typeof data['regulationAddressUploaded'] !== 'undefined') xData['regulation_address_uploaded'] = TypeTransformer.from('RegulationAddressUploadedCallback')(data['regulationAddressUploaded']);
      if(typeof data['accountDocumentVerified'] !== 'undefined') xData['account_document_verified'] = TypeTransformer.from('AccountDocumentVerifiedCallback')(data['accountDocumentVerified']);
      if(typeof data['accountIsFrozen'] !== 'undefined') xData['account_is_frozen'] = TypeTransformer.from('AccountIsFrozenCallback')(data['accountIsFrozen']);
      if(typeof data['accountIsUnfrozen'] !== 'undefined') xData['account_is_unfrozen'] = TypeTransformer.from('AccountIsUnfrozenCallback')(data['accountIsUnfrozen']);
      if(typeof data['activateSuccessful'] !== 'undefined') xData['activate_successful'] = TypeTransformer.from('ActivateSuccessfulCallback')(data['activateSuccessful']);
      if(typeof data['callHistoryReport'] !== 'undefined') xData['call_history_report'] = TypeTransformer.from('CallHistoryReportCallback')(data['callHistoryReport']);
      if(typeof data['cardExpired'] !== 'undefined') xData['card_expired'] = TypeTransformer.from('CardExpiredCallback')(data['cardExpired']);
      if(typeof data['cardExpiresInMonth'] !== 'undefined') xData['card_expires_in_month'] = TypeTransformer.from('CardExpiresInMonthCallback')(data['cardExpiresInMonth']);
      if(typeof data['cardPayment'] !== 'undefined') xData['card_payment'] = TypeTransformer.from('CardPaymentCallback')(data['cardPayment']);
      if(typeof data['cardPaymentFailed'] !== 'undefined') xData['card_payment_failed'] = TypeTransformer.from('CardPaymentFailedCallback')(data['cardPaymentFailed']);
      if(typeof data['robokassaPayment'] !== 'undefined') xData['robokassa_payment'] = TypeTransformer.from('RobokassaPaymentCallback')(data['robokassaPayment']);
      if(typeof data['wireTransfer'] !== 'undefined') xData['wire_transfer'] = TypeTransformer.from('WireTransferCallback')(data['wireTransfer']);
      if(typeof data['jsFail'] !== 'undefined') xData['js_fail'] = TypeTransformer.from('JSFailCallback')(data['jsFail']);
      if(typeof data['minBalance'] !== 'undefined') xData['min_balance'] = TypeTransformer.from('MinBalanceCallback')(data['minBalance']);
      if(typeof data['regulationAddressVerified'] !== 'undefined') xData['regulation_address_verified'] = TypeTransformer.from('RegulationAddressVerifiedCallback')(data['regulationAddressVerified']);
      if(typeof data['renewedSubscriptions'] !== 'undefined') xData['renewed_subscriptions'] = TypeTransformer.from('RenewedSubscriptionsCallback')(data['renewedSubscriptions']);
      if(typeof data['resetAccountPasswordRequest'] !== 'undefined') xData['reset_account_password_request'] = TypeTransformer.from('ResetAccountPasswordRequestCallback')(data['resetAccountPasswordRequest']);
      if(typeof data['sipRegistrationFail'] !== 'undefined') xData['sip_registration_fail'] = TypeTransformer.from('SIPRegistrationFailCallback')(data['sipRegistrationFail']);
      if(typeof data['stagnantAccount'] !== 'undefined') xData['stagnant_account'] = TypeTransformer.from('StagnantAccountCallback')(data['stagnantAccount']);
      if(typeof data['subscriptionIsFrozen'] !== 'undefined') xData['subscription_is_frozen'] = TypeTransformer.from('SubscriptionIsFrozenCallback')(data['subscriptionIsFrozen']);
      if(typeof data['subscriptionIsDetached'] !== 'undefined') xData['subscription_is_detached'] = TypeTransformer.from('SubscriptionIsDetachedCallback')(data['subscriptionIsDetached']);
      if(typeof data['transactionHistoryReport'] !== 'undefined') xData['transaction_history_report'] = TypeTransformer.from('TransactionHistoryReportCallback')(data['transactionHistoryReport']);
      if(typeof data['planConfig'] !== 'undefined') xData['plan_config'] = TypeTransformer.from('PlanConfigCallback')(data['planConfig']);
      if(typeof data['unverifiedSubscriptionDetached'] !== 'undefined') xData['unverified_subscription_detached'] = TypeTransformer.from('UnverifiedSubscriptionDetachedCallback')(data['unverifiedSubscriptionDetached']);
      if(typeof data['expiringCallerid'] !== 'undefined') xData['expiring_callerid'] = TypeTransformer.from('ExpiringCallerIDCallback')(data['expiringCallerid']);
      if(typeof data['transcriptionComplete'] !== 'undefined') xData['transcription_complete'] = TypeTransformer.from('TranscriptionCompleteCallback')(data['transcriptionComplete']);
      if(typeof data['smsInbound'] !== 'undefined') xData['sms_inbound'] = TypeTransformer.from('InboundSmsCallback')(data['smsInbound']);
      if(typeof data['newInvoice'] !== 'undefined') xData['new_invoice'] = TypeTransformer.from('NewInvoiceCallback')(data['newInvoice']);
      return xData;
},
    'AccountDocumentUploadedCallback': function(data){
      const xData = {};
      if(typeof data['accountDocumentId'] !== 'undefined') xData['account_document_id'] = TypeTransformer.from('number')(data['accountDocumentId']);
      if(typeof data['uploaded'] !== 'undefined') xData['uploaded'] = TypeTransformer.from('Date')(data['uploaded']);
      if(typeof data['isIndividual'] !== 'undefined') xData['is_individual'] = TypeTransformer.from('boolean')(data['isIndividual']);
      if(typeof data['verificationName'] !== 'undefined') xData['verification_name'] = TypeTransformer.from('string')(data['verificationName']);
      return xData;
},
    'RegulationAddressUploadedCallback': function(data){
      const xData = {};
      if(typeof data['regulationAddressId'] !== 'undefined') xData['regulation_address_id'] = TypeTransformer.from('number')(data['regulationAddressId']);
      if(typeof data['uploaded'] !== 'undefined') xData['uploaded'] = TypeTransformer.from('Date')(data['uploaded']);
      if(typeof data['isIndividual'] !== 'undefined') xData['is_individual'] = TypeTransformer.from('boolean')(data['isIndividual']);
      if(typeof data['regulationAddressName'] !== 'undefined') xData['regulation_address_name'] = TypeTransformer.from('string')(data['regulationAddressName']);
      return xData;
},
    'AccountDocumentVerifiedCallback': function(data){
      const xData = {};
      if(typeof data['accountDocumentId'] !== 'undefined') xData['account_document_id'] = TypeTransformer.from('number')(data['accountDocumentId']);
      if(typeof data['accountDocumentStatus'] !== 'undefined') xData['account_document_status'] = TypeTransformer.from('string')(data['accountDocumentStatus']);
      if(typeof data['uploaded'] !== 'undefined') xData['uploaded'] = TypeTransformer.from('Date')(data['uploaded']);
      if(typeof data['isIndividual'] !== 'undefined') xData['is_individual'] = TypeTransformer.from('boolean')(data['isIndividual']);
      if(typeof data['comment'] !== 'undefined') xData['comment'] = TypeTransformer.from('string')(data['comment']);
      if(typeof data['verificationName'] !== 'undefined') xData['verification_name'] = TypeTransformer.from('string')(data['verificationName']);
      return xData;
},
    'AccountIsFrozenCallback': function(data){
      const xData = {};
      
      return xData;
},
    'AccountIsUnfrozenCallback': function(data){
      const xData = {};
      
      return xData;
},
    'ActivateSuccessfulCallback': function(data){
      const xData = {};
      
      return xData;
},
    'CallHistoryReportCallback': function(data){
      const xData = {};
      if(typeof data['historyReportId'] !== 'undefined') xData['history_report_id'] = TypeTransformer.from('number')(data['historyReportId']);
      if(typeof data['success'] !== 'undefined') xData['success'] = TypeTransformer.from('boolean')(data['success']);
      if(typeof data['orderDate'] !== 'undefined') xData['order_date'] = TypeTransformer.from('Date')(data['orderDate']);
      return xData;
},
    'CardExpiredCallback': function(data){
      const xData = {};
      
      return xData;
},
    'CardExpiresInMonthCallback': function(data){
      const xData = {};
      
      return xData;
},
    'CardPaymentCallback': function(data){
      const xData = {};
      if(typeof data['transactionId'] !== 'undefined') xData['transaction_id'] = TypeTransformer.from('number')(data['transactionId']);
      if(typeof data['transactionType'] !== 'undefined') xData['transaction_type'] = TypeTransformer.from('string')(data['transactionType']);
      if(typeof data['amount'] !== 'undefined') xData['amount'] = TypeTransformer.from('number')(data['amount']);
      return xData;
},
    'CardPaymentFailedCallback': function(data){
      const xData = {};
      
      return xData;
},
    'RobokassaPaymentCallback': function(data){
      const xData = {};
      if(typeof data['transactionId'] !== 'undefined') xData['transaction_id'] = TypeTransformer.from('number')(data['transactionId']);
      if(typeof data['transactionType'] !== 'undefined') xData['transaction_type'] = TypeTransformer.from('string')(data['transactionType']);
      if(typeof data['amount'] !== 'undefined') xData['amount'] = TypeTransformer.from('number')(data['amount']);
      return xData;
},
    'WireTransferCallback': function(data){
      const xData = {};
      if(typeof data['transactionId'] !== 'undefined') xData['transaction_id'] = TypeTransformer.from('number')(data['transactionId']);
      if(typeof data['transactionType'] !== 'undefined') xData['transaction_type'] = TypeTransformer.from('string')(data['transactionType']);
      if(typeof data['amount'] !== 'undefined') xData['amount'] = TypeTransformer.from('number')(data['amount']);
      return xData;
},
    'JSFailCallback': function(data){
      const xData = {};
      
      return xData;
},
    'MinBalanceCallback': function(data){
      const xData = {};
      if(typeof data['isMinCredit'] !== 'undefined') xData['is_min_credit'] = TypeTransformer.from('boolean')(data['isMinCredit']);
      if(typeof data['isRepeated'] !== 'undefined') xData['is_repeated'] = TypeTransformer.from('boolean')(data['isRepeated']);
      return xData;
},
    'RegulationAddressVerifiedCallback': function(data){
      const xData = {};
      if(typeof data['regulationAddressId'] !== 'undefined') xData['regulation_address_id'] = TypeTransformer.from('number')(data['regulationAddressId']);
      if(typeof data['regulationAddressStatus'] !== 'undefined') xData['regulation_address_status'] = TypeTransformer.from('string')(data['regulationAddressStatus']);
      if(typeof data['uploaded'] !== 'undefined') xData['uploaded'] = TypeTransformer.from('Date')(data['uploaded']);
      if(typeof data['isIndividual'] !== 'undefined') xData['is_individual'] = TypeTransformer.from('boolean')(data['isIndividual']);
      if(typeof data['comment'] !== 'undefined') xData['comment'] = TypeTransformer.from('string')(data['comment']);
      if(typeof data['regulationAddressName'] !== 'undefined') xData['regulation_address_name'] = TypeTransformer.from('string')(data['regulationAddressName']);
      return xData;
},
    'RenewedSubscriptionsCallback': function(data){
      const xData = {};
      if(typeof data['subscriptions'] !== 'undefined') xData['subscriptions'] = TypeTransformer.from('RenewedSubscriptionsCallbackItem[]')(data['subscriptions']);
      return xData;
},
    'RenewedSubscriptionsCallbackItem': function(data){
      const xData = {};
      if(typeof data['type'] !== 'undefined') xData['type'] = TypeTransformer.from('string')(data['type']);
      if(typeof data['name'] !== 'undefined') xData['name'] = TypeTransformer.from('string')(data['name']);
      if(typeof data['cost'] !== 'undefined') xData['cost'] = TypeTransformer.from('number')(data['cost']);
      if(typeof data['nextRenewal'] !== 'undefined') xData['next_renewal'] = TypeTransformer.from('Date')(data['nextRenewal']);
      return xData;
},
    'ResetAccountPasswordRequestCallback': function(data){
      const xData = {};
      
      return xData;
},
    'SIPRegistrationFailCallback': function(data){
      const xData = {};
      if(typeof data['sipRegistrationId'] !== 'undefined') xData['sip_registration_id'] = TypeTransformer.from('number')(data['sipRegistrationId']);
      return xData;
},
    'SubscriptionIsDetachedCallback': function(data){
      const xData = {};
      if(typeof data['subscriptions'] !== 'undefined') xData['subscriptions'] = TypeTransformer.from('SubscriptionIsDetachedCallbackItem[]')(data['subscriptions']);
      return xData;
},
    'SubscriptionIsDetachedCallbackItem': function(data){
      const xData = {};
      if(typeof data['type'] !== 'undefined') xData['type'] = TypeTransformer.from('string')(data['type']);
      if(typeof data['name'] !== 'undefined') xData['name'] = TypeTransformer.from('string')(data['name']);
      return xData;
},
    'SubscriptionIsFrozenCallback': function(data){
      const xData = {};
      if(typeof data['subscriptions'] !== 'undefined') xData['subscriptions'] = TypeTransformer.from('SubscriptionIsFrozenCallbackItem[]')(data['subscriptions']);
      return xData;
},
    'SubscriptionIsFrozenCallbackItem': function(data){
      const xData = {};
      if(typeof data['type'] !== 'undefined') xData['type'] = TypeTransformer.from('string')(data['type']);
      if(typeof data['name'] !== 'undefined') xData['name'] = TypeTransformer.from('string')(data['name']);
      if(typeof data['cost'] !== 'undefined') xData['cost'] = TypeTransformer.from('number')(data['cost']);
      return xData;
},
    'StagnantAccountCallback': function(data){
      const xData = {};
      
      return xData;
},
    'TransactionHistoryReportCallback': function(data){
      const xData = {};
      if(typeof data['historyReportId'] !== 'undefined') xData['history_report_id'] = TypeTransformer.from('number')(data['historyReportId']);
      if(typeof data['success'] !== 'undefined') xData['success'] = TypeTransformer.from('boolean')(data['success']);
      if(typeof data['orderDate'] !== 'undefined') xData['order_date'] = TypeTransformer.from('Date')(data['orderDate']);
      return xData;
},
    'PlanConfigCallback': function(data){
      const xData = {};
      if(typeof data['planType'] !== 'undefined') xData['plan_type'] = TypeTransformer.from('string')(data['planType']);
      if(typeof data['planName'] !== 'undefined') xData['plan_name'] = TypeTransformer.from('string')(data['planName']);
      if(typeof data['packages'] !== 'undefined') xData['packages'] = TypeTransformer.from('PlanPackageConfig[]')(data['packages']);
      return xData;
},
    'PlanPackageConfig': function(data){
      const xData = {};
      if(typeof data['priceGroupId'] !== 'undefined') xData['price_group_id'] = TypeTransformer.from('number[]')(data['priceGroupId']);
      if(typeof data['packageName'] !== 'undefined') xData['package_name'] = TypeTransformer.from('string')(data['packageName']);
      if(typeof data['packageUuid'] !== 'undefined') xData['package_uuid'] = TypeTransformer.from('string')(data['packageUuid']);
      if(typeof data['mayOverrun'] !== 'undefined') xData['may_overrun'] = TypeTransformer.from('boolean')(data['mayOverrun']);
      if(typeof data['packageSize'] !== 'undefined') xData['package_size'] = TypeTransformer.from('number')(data['packageSize']);
      return xData;
},
    'UnverifiedSubscriptionDetachedCallback': function(data){
      const xData = {};
      if(typeof data['subscriptions'] !== 'undefined') xData['subscriptions'] = TypeTransformer.from('UnverifiedSubscriptionDetachedCallbackItem[]')(data['subscriptions']);
      return xData;
},
    'UnverifiedSubscriptionDetachedCallbackItem': function(data){
      const xData = {};
      if(typeof data['type'] !== 'undefined') xData['type'] = TypeTransformer.from('string')(data['type']);
      if(typeof data['name'] !== 'undefined') xData['name'] = TypeTransformer.from('string')(data['name']);
      return xData;
},
    'ExpiringCallerIDCallback': function(data){
      const xData = {};
      if(typeof data['callerids'] !== 'undefined') xData['callerids'] = TypeTransformer.from('string[]')(data['callerids']);
      if(typeof data['expirationDate'] !== 'undefined') xData['expiration_date'] = TypeTransformer.from('Date')(data['expirationDate']);
      return xData;
},
    'TranscriptionCompleteCallback': function(data){
      const xData = {};
      if(typeof data['transcriptionComplete'] !== 'undefined') xData['transcription_complete'] = TypeTransformer.from('TranscriptionCompleteCallbackItem')(data['transcriptionComplete']);
      return xData;
},
    'TranscriptionCompleteCallbackItem': function(data){
      const xData = {};
      if(typeof data['recordUrl'] !== 'undefined') xData['record_url'] = TypeTransformer.from('string')(data['recordUrl']);
      if(typeof data['transcriptionUrl'] !== 'undefined') xData['transcription_url'] = TypeTransformer.from('string')(data['transcriptionUrl']);
      if(typeof data['callSessionHistoryId'] !== 'undefined') xData['call_session_history_id'] = TypeTransformer.from('number')(data['callSessionHistoryId']);
      if(typeof data['transcriptionCost'] !== 'undefined') xData['transcription_cost'] = TypeTransformer.from('number')(data['transcriptionCost']);
      return xData;
},
    'ZipCode': function(data){
      const xData = {};
      if(typeof data['city'] !== 'undefined') xData['city'] = TypeTransformer.from('string')(data['city']);
      if(typeof data['zipCode'] !== 'undefined') xData['zip_code'] = TypeTransformer.from('string')(data['zipCode']);
      return xData;
},
    'RegulationCountry': function(data){
      const xData = {};
      if(typeof data['countryCode'] !== 'undefined') xData['country_code'] = TypeTransformer.from('string')(data['countryCode']);
      if(typeof data['countryName'] !== 'undefined') xData['country_name'] = TypeTransformer.from('string')(data['countryName']);
      return xData;
},
    'RegulationAddress': function(data){
      const xData = {};
      if(typeof data['regulationAddressId'] !== 'undefined') xData['regulation_address_id'] = TypeTransformer.from('number')(data['regulationAddressId']);
      if(typeof data['externalId'] !== 'undefined') xData['external_id'] = TypeTransformer.from('string')(data['externalId']);
      if(typeof data['countryCode'] !== 'undefined') xData['country_code'] = TypeTransformer.from('string')(data['countryCode']);
      if(typeof data['phoneCategoryName'] !== 'undefined') xData['phone_category_name'] = TypeTransformer.from('string')(data['phoneCategoryName']);
      if(typeof data['salutation'] !== 'undefined') xData['salutation'] = TypeTransformer.from('string')(data['salutation']);
      if(typeof data['company'] !== 'undefined') xData['company'] = TypeTransformer.from('string')(data['company']);
      if(typeof data['firstName'] !== 'undefined') xData['first_name'] = TypeTransformer.from('string')(data['firstName']);
      if(typeof data['lastName'] !== 'undefined') xData['last_name'] = TypeTransformer.from('string')(data['lastName']);
      if(typeof data['ownerCountryCode'] !== 'undefined') xData['owner_country_code'] = TypeTransformer.from('string')(data['ownerCountryCode']);
      if(typeof data['city'] !== 'undefined') xData['city'] = TypeTransformer.from('string')(data['city']);
      if(typeof data['zipCode'] !== 'undefined') xData['zip_code'] = TypeTransformer.from('string')(data['zipCode']);
      if(typeof data['street'] !== 'undefined') xData['street'] = TypeTransformer.from('string')(data['street']);
      if(typeof data['builderNumber'] !== 'undefined') xData['builder_number'] = TypeTransformer.from('string')(data['builderNumber']);
      if(typeof data['builderLatter'] !== 'undefined') xData['builder_latter'] = TypeTransformer.from('string')(data['builderLatter']);
      if(typeof data['status'] !== 'undefined') xData['status'] = TypeTransformer.from('string')(data['status']);
      if(typeof data['rejectMessage'] !== 'undefined') xData['reject_message'] = TypeTransformer.from('string')(data['rejectMessage']);
      return xData;
},
    'RegulationRegionRecord': function(data){
      const xData = {};
      if(typeof data['phoneRegionId'] !== 'undefined') xData['phone_region_id'] = TypeTransformer.from('number')(data['phoneRegionId']);
      if(typeof data['phoneRegionName'] !== 'undefined') xData['phone_region_name'] = TypeTransformer.from('string')(data['phoneRegionName']);
      if(typeof data['phoneRegionCode'] !== 'undefined') xData['phone_region_code'] = TypeTransformer.from('string')(data['phoneRegionCode']);
      if(typeof data['isNeedRegulationAddress'] !== 'undefined') xData['is_need_regulation_address'] = TypeTransformer.from('boolean')(data['isNeedRegulationAddress']);
      if(typeof data['regulationAddressType'] !== 'undefined') xData['regulation_address_type'] = TypeTransformer.from('string')(data['regulationAddressType']);
      return xData;
},
    'PstnBlackListInfo': function(data){
      const xData = {};
      if(typeof data['pstnBlacklistId'] !== 'undefined') xData['pstn_blacklist_id'] = TypeTransformer.from('number')(data['pstnBlacklistId']);
      if(typeof data['pstnBlacklistPhone '] !== 'undefined') xData['pstn_blacklist_phone '] = TypeTransformer.from('string')(data['pstnBlacklistPhone ']);
      return xData;
},
    'DialogflowKeyInfo': function(data){
      const xData = {};
      if(typeof data['dialogflowKeyId'] !== 'undefined') xData['dialogflow_key_id'] = TypeTransformer.from('number')(data['dialogflowKeyId']);
      if(typeof data['content'] !== 'undefined') xData['content'] = TypeTransformer.from('DialogflowKey')(data['content']);
      if(typeof data['applications'] !== 'undefined') xData['applications'] = TypeTransformer.from('ApplicationInfo[]')(data['applications']);
      return xData;
},
    'DialogflowKey': function(data){
      const xData = {};
      if(typeof data['projectId'] !== 'undefined') xData['project_id'] = TypeTransformer.from('string')(data['projectId']);
      return xData;
},
    'PushCredentialInfo': function(data){
      const xData = {};
      if(typeof data['pushCredentialId'] !== 'undefined') xData['push_credential_id'] = TypeTransformer.from('number')(data['pushCredentialId']);
      if(typeof data['pushProviderId'] !== 'undefined') xData['push_provider_id'] = TypeTransformer.from('number')(data['pushProviderId']);
      if(typeof data['pushProviderName'] !== 'undefined') xData['push_provider_name'] = TypeTransformer.from('string')(data['pushProviderName']);
      if(typeof data['credentialBundle'] !== 'undefined') xData['credential_bundle'] = TypeTransformer.from('string')(data['credentialBundle']);
      if(typeof data['content'] !== 'undefined') xData['content'] = TypeTransformer.from('PushCredentialContent')(data['content']);
      if(typeof data['applications'] !== 'undefined') xData['applications'] = TypeTransformer.from('ApplicationInfo[]')(data['applications']);
      return xData;
},
    'PushCredentialContent': function(data){
      const xData = {};
      if(typeof data['certFileName'] !== 'undefined') xData['cert_file_name'] = TypeTransformer.from('string')(data['certFileName']);
      if(typeof data['certContent'] !== 'undefined') xData['cert_content'] = TypeTransformer.from('string')(data['certContent']);
      if(typeof data['isDevMode'] !== 'undefined') xData['is_dev_mode'] = TypeTransformer.from('boolean')(data['isDevMode']);
      if(typeof data['senderId'] !== 'undefined') xData['sender_id'] = TypeTransformer.from('string')(data['senderId']);
      return xData;
},
    'InboundSmsCallback': function(data){
      const xData = {};
      if(typeof data['smsInbound'] !== 'undefined') xData['sms_inbound'] = TypeTransformer.from('InboundSmsCallbackItem[]')(data['smsInbound']);
      return xData;
},
    'InboundSmsCallbackItem': function(data){
      const xData = {};
      if(typeof data['sourceNumber'] !== 'undefined') xData['source_number'] = TypeTransformer.from('string')(data['sourceNumber']);
      if(typeof data['destinationNumber'] !== 'undefined') xData['destination_number'] = TypeTransformer.from('string')(data['destinationNumber']);
      if(typeof data['smsBody'] !== 'undefined') xData['sms_body'] = TypeTransformer.from('string')(data['smsBody']);
      return xData;
},
    'NewInvoiceCallback': function(data){
      const xData = {};
      if(typeof data['newInvoice'] !== 'undefined') xData['new_invoice'] = TypeTransformer.from('NewInvoiceCallbackItem')(data['newInvoice']);
      return xData;
},
    'NewInvoiceCallbackItem': function(data){
      const xData = {};
      if(typeof data['invoiceNumber'] !== 'undefined') xData['invoice_number'] = TypeTransformer.from('string')(data['invoiceNumber']);
      if(typeof data['invoiceDate'] !== 'undefined') xData['invoice_date'] = TypeTransformer.from('string')(data['invoiceDate']);
      if(typeof data['prepayment'] !== 'undefined') xData['prepayment'] = TypeTransformer.from('boolean')(data['prepayment']);
      if(typeof data['currency'] !== 'undefined') xData['currency'] = TypeTransformer.from('string')(data['currency']);
      if(typeof data['totalAmount'] !== 'undefined') xData['total_amount'] = TypeTransformer.from('number')(data['totalAmount']);
      if(typeof data['totalTaxAmount'] !== 'undefined') xData['total_tax_amount'] = TypeTransformer.from('number')(data['totalTaxAmount']);
      if(typeof data['units'] !== 'undefined') xData['units'] = TypeTransformer.from('InvoiceUnits[]')(data['units']);
      return xData;
},
    'InvoiceUnits': function(data){
      const xData = {};
      if(typeof data['description'] !== 'undefined') xData['description'] = TypeTransformer.from('string')(data['description']);
      if(typeof data['amount'] !== 'undefined') xData['amount'] = TypeTransformer.from('number')(data['amount']);
      if(typeof data['vatRate'] !== 'undefined') xData['vat_rate'] = TypeTransformer.from('number')(data['vatRate']);
      if(typeof data['taxAmount'] !== 'undefined') xData['tax_amount'] = TypeTransformer.from('number')(data['taxAmount']);
      return xData;
},
    'RecordStorageInfo': function(data){
      const xData = {};
      if(typeof data['recordStorageId'] !== 'undefined') xData['record_storage_id'] = TypeTransformer.from('number')(data['recordStorageId']);
      if(typeof data['recordStorageName'] !== 'undefined') xData['record_storage_name'] = TypeTransformer.from('string')(data['recordStorageName']);
      return xData;
},
    'KeyInfo': function(data){
      const xData = {};
      if(typeof data['accountEmail'] !== 'undefined') xData['account_email'] = TypeTransformer.from('string')(data['accountEmail']);
      if(typeof data['accountId'] !== 'undefined') xData['account_id'] = TypeTransformer.from('number')(data['accountId']);
      if(typeof data['keyId'] !== 'undefined') xData['key_id'] = TypeTransformer.from('string')(data['keyId']);
      if(typeof data['privateKey'] !== 'undefined') xData['private_key'] = TypeTransformer.from('string')(data['privateKey']);
      return xData;
},
    'KeyView': function(data){
      const xData = {};
      if(typeof data['keyId'] !== 'undefined') xData['key_id'] = TypeTransformer.from('string')(data['keyId']);
      if(typeof data['roles'] !== 'undefined') xData['roles'] = TypeTransformer.from('RoleView[]')(data['roles']);
      if(typeof data['description'] !== 'undefined') xData['description'] = TypeTransformer.from('string')(data['description']);
      if(typeof data['subuser'] !== 'undefined') xData['subuser'] = TypeTransformer.from('SubUserView[]')(data['subuser']);
      return xData;
},
    'SubUserView': function(data){
      const xData = {};
      if(typeof data['subuserId'] !== 'undefined') xData['subuser_id'] = TypeTransformer.from('number')(data['subuserId']);
      if(typeof data['subuserName'] !== 'undefined') xData['subuser_name'] = TypeTransformer.from('string')(data['subuserName']);
      if(typeof data['description'] !== 'undefined') xData['description'] = TypeTransformer.from('string')(data['description']);
      if(typeof data['roles'] !== 'undefined') xData['roles'] = TypeTransformer.from('RoleView[]')(data['roles']);
      return xData;
},
    'SubUserID': function(data){
      const xData = {};
      if(typeof data['subuserId'] !== 'undefined') xData['subuser_id'] = TypeTransformer.from('number')(data['subuserId']);
      return xData;
},
    'RoleView': function(data){
      const xData = {};
      if(typeof data['roleName'] !== 'undefined') xData['role_name'] = TypeTransformer.from('string')(data['roleName']);
      if(typeof data['roleId'] !== 'undefined') xData['role_id'] = TypeTransformer.from('number')(data['roleId']);
      if(typeof data['inherited'] !== 'undefined') xData['inherited'] = TypeTransformer.from('boolean')(data['inherited']);
      if(typeof data['childIds'] !== 'undefined') xData['child_ids'] = TypeTransformer.from('number[]')(data['childIds']);
      if(typeof data['parentRoleId'] !== 'undefined') xData['parent_role_id'] = TypeTransformer.from('number[]')(data['parentRoleId']);
      if(typeof data['guiOnly'] !== 'undefined') xData['gui_only'] = TypeTransformer.from('boolean')(data['guiOnly']);
      return xData;
},
    'RoleGroupView': function(data){
      const xData = {};
      if(typeof data['id'] !== 'undefined') xData['id'] = TypeTransformer.from('number')(data['id']);
      if(typeof data['name'] !== 'undefined') xData['name'] = TypeTransformer.from('string')(data['name']);
      return xData;
},
    'ChildAccountSubscription': function(data){
      const xData = {};
      if(typeof data['subscriptionId'] !== 'undefined') xData['subscription_id'] = TypeTransformer.from('number')(data['subscriptionId']);
      if(typeof data['subscriptionName'] !== 'undefined') xData['subscription_name'] = TypeTransformer.from('string')(data['subscriptionName']);
      if(typeof data['subscriptionTemplateId'] !== 'undefined') xData['subscription_template_id'] = TypeTransformer.from('number')(data['subscriptionTemplateId']);
      if(typeof data['autoCharge'] !== 'undefined') xData['auto_charge'] = TypeTransformer.from('boolean')(data['autoCharge']);
      if(typeof data['nextRenewal'] !== 'undefined') xData['next_renewal'] = TypeTransformer.from('Date')(data['nextRenewal']);
      if(typeof data['periodicPrice'] !== 'undefined') xData['periodic_price'] = TypeTransformer.from('number')(data['periodicPrice']);
      if(typeof data['active'] !== 'undefined') xData['active'] = TypeTransformer.from('boolean')(data['active']);
      return xData;
},
    'ChildAccountSubscriptionTemplate': function(data){
      const xData = {};
      if(typeof data['subscriptionTemplateId'] !== 'undefined') xData['subscription_template_id'] = TypeTransformer.from('number')(data['subscriptionTemplateId']);
      if(typeof data['subscriptionTemplateName'] !== 'undefined') xData['subscription_template_name'] = TypeTransformer.from('string')(data['subscriptionTemplateName']);
      if(typeof data['installationPrice'] !== 'undefined') xData['installation_price'] = TypeTransformer.from('number')(data['installationPrice']);
      if(typeof data['periodicPrice'] !== 'undefined') xData['periodic_price'] = TypeTransformer.from('number')(data['periodicPrice']);
      return xData;
},
    'SmsHistory': function(data){
      const xData = {};
      if(typeof data['smsId'] !== 'undefined') xData['sms_id'] = TypeTransformer.from('number')(data['smsId']);
      if(typeof data['sourceNumber'] !== 'undefined') xData['source_number'] = TypeTransformer.from('number')(data['sourceNumber']);
      if(typeof data['destinationNumber'] !== 'undefined') xData['destination_number'] = TypeTransformer.from('number')(data['destinationNumber']);
      if(typeof data['direction'] !== 'undefined') xData['direction'] = TypeTransformer.from('string')(data['direction']);
      if(typeof data['fragments'] !== 'undefined') xData['fragments'] = TypeTransformer.from('number')(data['fragments']);
      if(typeof data['cost'] !== 'undefined') xData['cost'] = TypeTransformer.from('number')(data['cost']);
      if(typeof data['statusId'] !== 'undefined') xData['status_id'] = TypeTransformer.from('number')(data['statusId']);
      if(typeof data['errorMessage'] !== 'undefined') xData['error_message'] = TypeTransformer.from('string')(data['errorMessage']);
      if(typeof data['processedDate'] !== 'undefined') xData['processed_date'] = TypeTransformer.from('Date')(data['processedDate']);
      if(typeof data['transactionId'] !== 'undefined') xData['transaction_id'] = TypeTransformer.from('number')(data['transactionId']);
      return xData;
}
  }

  public static from(type:string):any{
    const isArray = TypeTransformer.hasArrayBrackets(type);
    const fType = isArray?type.replace('[','').replace(']',''):type;
    const existTransformer = TypeTransformer.fromActors[fType];
    const transformer = (existTransformer)?existTransformer:TypeTransformer.fromStatic(fType);
    if(isArray) return function(data){return data.map(transformer)};
    return transformer;
  }
  public static to(type:string):any{
    const isArray = TypeTransformer.hasArrayBrackets(type);
    const fType = isArray?type.replace('[','').replace(']',''):type;
    const existTransformer = TypeTransformer.toActors[fType];
    const transformer = (existTransformer)?existTransformer:TypeTransformer.toStatic(fType);
    if(isArray) return function(data){return data.map(transformer)};
    return transformer;
  }
  private static hasArrayBrackets(type: string): boolean {
    return (type.indexOf('[') === 0 && type.indexOf(']') === (type.length - 1));
  }
  private static fromStatic(type: string): (data:any)=>any {
    return function(data){
          if(type==='date') 
            return new Date(data+' GMT')
          else if(type==='timestamp') 
            return new Date(data+' GMT')  
          else return data
    };
  }
  private static toStatic(type: string): (data:any)=>any {
    return function(data){
          if(type==='date') 
            return data.toISOString().replace(/T/, ' ').replace(/\..+/, '');
          if(type==='timestamp') 
            return data.toISOString().replace(/T/, ' ').replace(/\..+/, ''); 
          else return data};
  }
}