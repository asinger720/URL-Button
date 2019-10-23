({
	//Open URL in New Browser Tab With Record Id
	OpenURL : function(component, event, helper) {
        var recordId = component.get('v.recordId');
        var url = component.get('v.url');
        var open = component.get('v.open');
        var includeRecord = component.get('v.includeRecord');
        
        var url2Open = url;
        if(includeRecord == true){ url2Open += recordId;}
        
        var urlEvent = $A.get("e.force:navigateToURL");
        urlEvent.setParams({ "url": url2Open });
        urlEvent.fire();
		//window.open(url2Open, open);  
    }
})
