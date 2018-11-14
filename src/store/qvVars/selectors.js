import _ from 'lodash';

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export const getFilteredVars = function(varData, searchText = '', groupSelected = '', hideLocked = false) {
	//-------------------
	//- varData :
	//- searchText :
	//- groupSelected :
	//- hideLocked : filter out any field that is marked as locked.
	//-------------------

	//Handle groupSelected Change
	//Filter passed varListView so only passed "groupSelected" shows
  //or if "All" is passed, show all variables
	let filteredVarData = varData.filter((value) => {
			if (value.group === groupSelected || groupSelected === '') {
				return true;
			} else {
				return false;
			}
	});

	//Handle hideLocked flag
	if (hideLocked) {
		filteredVarData = filteredVarData.filter(item => !item.locked);
	}
	//Handle search string searching
	if (searchText.length > 0) {
		//This function makes sure that any regex special chars are escaped.
		//No longer used -- using lodash function instead
		// const escapeRegExp = (str) => {
		// 	return str.replace(/[-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
		// }
		//convert input string to a regular expression object to pass to match function
		let reSearchString = new RegExp(_.escapeRegExp(searchText.toLowerCase()), "g");
		filteredVarData = filteredVarData.filter(function(item){
			if (item.name) {
				return item.name.toLowerCase().match(reSearchString);
			}
		});
  }
  /**
   * create an Object to return with groups as keys and the groups
   * associated qvVars as an array
   * {
   *   group1: [{...}, {...}],
   *   group2: [{...}, {...}],
   *   group3: [{...}, {...}],
   * }
   * 
   */
  let groupedVarData = filteredVarData.reduce((accum, varItem) => {
    let updatedAccum = accum[varItem.group]
    ? [...accum[varItem.group], varItem]
    : [varItem];
    accum[varItem.group] = updatedAccum;
    return accum;
  }, {});
  
	return groupedVarData;
};

export const getDistinctGroups = (qvVarData) => {
	// Use lodash to sort by group, return only group and the make distinct by group
	let distinctGroups = _
		.chain(qvVarData)
		.sortBy('group')
		.map(qvVar => qvVar.group)
		.sortedUniqBy()
		.value();
	
	return distinctGroups;

}