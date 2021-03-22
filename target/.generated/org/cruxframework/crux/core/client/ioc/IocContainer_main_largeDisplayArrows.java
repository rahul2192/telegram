package org.cruxframework.crux.core.client.ioc;

import org.cruxframework.crux.core.client.screen.views.View;
import com.google.gwt.core.client.GWT;

public class IocContainer_main_largeDisplayArrows extends org.cruxframework.crux.core.client.ioc.IocContainer {
  public IocContainer_main_largeDisplayArrows(View view){
    super(view);
  }
  public  tele.client.MainController.MainView gettele_client_MainController_MainView(org.cruxframework.crux.core.client.ioc.IoCResource.Scope scope, String subscope){
    tele.client.MainController.MainView result = _getScope(scope).getValue(new org.cruxframework.crux.core.client.ioc.IocProvider<tele.client.MainController.MainView>(){
      public tele.client.MainController.MainView get(){
        return GWT.create(tele.client.MainController.MainView.class);
      }
    }, "tele.client.MainController.MainView", subscope, 
    new IocScope.CreateCallback<tele.client.MainController.MainView>(){
      public void onCreate(tele.client.MainController.MainView newObject){
      }
    }
    );
    if (scope != org.cruxframework.crux.core.client.ioc.IoCResource.Scope.SINGLETON && result.getBoundCruxViewId() == null){
      result.bindCruxView(this.getBoundCruxViewId());
    }
    return result;
  }
}
