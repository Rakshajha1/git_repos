public with sharing class cohortLeaderBoardHandler {

	@AuraEnabled
	public static List<Cohort__c> getCohortScore(){
			 
		return [SELECT Name, Average_Score__c FROM Cohort__c ORDER BY Average_Score__c DESC LIMIT 1];

	}
    
}
