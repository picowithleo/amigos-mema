const openChat = function() {
    window.Kommunicate.displayKommunicateWidget(true);
    window.Kommunicate.launchConversation();
};

export { openChat };
