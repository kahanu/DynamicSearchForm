import { SearchCriteria } from '../models/models';

export const Helpers = {

  /**
   * Map the data from the form into the collection for
   * submission to the web service.
   * @param formData the data from the form collection.
   */
  mapToCriteria: function(formData: any) {
    const criteriaList: SearchCriteria[] = [];
    formData['items'].forEach(element => {
      const criteria = new SearchCriteria();
      criteria.FieldName = element.labelName;
      criteria.FieldValue = [element.fieldValue];
      criteria.OperationName = element.operation;
      criteria.Type = element.dataType;
      criteria.Connector = element.connector;
      criteriaList.push(criteria);
    });

    return criteriaList;
  }
};
