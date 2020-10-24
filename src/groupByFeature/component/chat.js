
import React, { Component } from 'react';




class TalktoMema extends Component {
    // constructor(props) {
    //     super(props);
    // };


    componentDidMount(){ 
        // function openChat() {
        //     window.Kommunicate.displayKommunicateWidget(true);
        //     window.Kommunicate.launchConversation();
        // };

        (function(d, m){
            var kommunicateSettings = 
                {"appId":"713c92b0f971aea64e9ab82e96a112bd",
                "popupWidget":true,
                "automaticChatOpenOnNavigation":true,
                "onInit": function()
                {
                    window.Kommunicate.customizeWidgetCss("div#mck-agent-status-text { display: none !important; } span.mck-agent-status-indicator { display: none !important }");
                    var widgettext = ".chat-popup-widget-text{color:#000000!important;}"
                    window.Kommunicate.customizeWidgetCss(widgettext);
                    var widgetbackground = ".chat-popup-widget-container{background-color: #8bc38c!important;}"
                    window.Kommunicate.customizeWidgetCss(widgetbackground);
                    // window.Kommunicate.displayKommunicateWidget(false);
                }
                // "onInit": function()
                //     {
                //         window.Kommunicate.displayKommunicateWidget(false);
                //         document.getElementById("button").disabled=false;
                //     }
                };
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
        
    }

    render() {
        return (
           <div >
           </div>

        )
    }
}
    


export default TalktoMema;