({
      //Open URL in New Browser Tab With Record Id
    OpenURL : function(component, event, helper) {
        var recordId = component.get('v.recordId');
        var url = component.get('v.url');
        var open = component.get('v.open');
        var includeRecord = component.get('v.includeRecord');
        
       
        if(component.get('v.includeRecord') == true){
             window.open(url + recordId, open);
        }
       else
           window.open(url, open);
  
       
    }
})
