import { LightningElement, api, wire } from 'lwc';
import COHORT_OBJECT from '@salesforce/schema/Cohort__c';
import NAME_FIELD from '@salesforce/schema/Cohort__c.Name';
import AVERAGE_SCORE_FIELD from '@salesforce/schema/Cohort__c.Average_Score__c';
import getCohortScore from '@salesforce/apex/cohortLeaderBoardHandler.getCohortScore';

export default class CohortLeaderBoard extends LightningElement {
    nameField = NAME_FIELD;
    avgScoreField = AVERAGE_SCORE_FIELD;

    @api recordId
    @api objectApiName;

    @wire(getCohortScore)
    cohortScore;
}