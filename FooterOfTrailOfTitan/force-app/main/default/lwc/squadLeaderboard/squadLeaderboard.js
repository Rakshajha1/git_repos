import { LightningElement, api, wire } from 'lwc';
import SQUAD_OBJECT from '@salesforce/schema/Squad__c';
import NAME_FIELD from '@salesforce/schema/Squad__c.Name';
import SCORE_FIELD from '@salesforce/schema/Squad__c.Score__c';
import getSquadScore from '@salesforce/apex/SquadLeaderBoardHandler.getSquadScore';

const COLUMN = [
    { label: 'Squad Name', fieldName: NAME_FIELD.fieldApiName, type: 'text' },
    { label: 'Squad Score', fieldName: SCORE_FIELD.fieldApiName, type: 'text' },
]

export default class SquadLeaderboard extends LightningElement {
    //nameField = NAME_FIELD;
    //scoreField = SCORE_FIELD;
    column = COLUMN;
    field = [NAME_FIELD, SCORE_FIELD]

    @api recordId
    objectApiName = SQUAD_OBJECT;

    @wire(getSquadScore)
    squadScore;


}