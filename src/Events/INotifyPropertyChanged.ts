module etch.events {

    export class PropertyChangedEventArgs implements nullstone.IEventArgs {
        PropertyName:string;

        constructor(propertyName:string) {
            Object.defineProperty(this, "PropertyName", {value: propertyName, writable: false});
        }
    }

    export interface INotifyPropertyChanged {
        PropertyChanged: nullstone.Event<PropertyChangedEventArgs>;
    }

    export var INotifyPropertyChanged_ = new nullstone.Interface<INotifyPropertyChanged>("INotifyPropertyChanged");

    // todo: remove?
    INotifyPropertyChanged_.is = (o:any):boolean => {
        return o && o.PropertyChanged instanceof nullstone.Event;
    };
}