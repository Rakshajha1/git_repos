import { LightningElement, api, wire } from 'lwc';
import TEAM_OBJECT from '@salesforce/schema/Team__c';
import NAME_FIELD from '@salesforce/schema/Team__c.Name';
import SQUAD_SUM_FIELD from '@salesforce/schema/Team__c.Squad_Sum__c';
export default class TeamLeaderBoard extends LightningElement {

    namefield = NAME_FIELD;
    squadSumfield = SQUAD_SUM_FIELD;

    @api recordId;
    @api objectApiName;



}