//EDIT THIS FILE

/***
* Make sure to call the super() constructor with your sender ids
* When your website is closed the handleBackgroundMessage will be called. You should create a notification there.
***/
class FCMClientImplementation extends FCMClient{
	constructor(){
		super(["114439061657"])
	}
	handleBackgroundMessage(serviceWorker, payload){
		serviceWorker.registration.showNotification("Test Notification",{"body":payload.data.message});
	}
}