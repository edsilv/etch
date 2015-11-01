import CollectionChangedEventArgs = etch.events.CollectionChangedEventArgs;
module etch.events {

    export interface INotifyCollectionChanged {
        CollectionChanged: nullstone.Event<CollectionChangedEventArgs>;
    }

    export var INotifyCollectionChanged_ = new nullstone.Interface<INotifyCollectionChanged>("INotifyCollectionChanged");

    // todo: remove?
    INotifyCollectionChanged_.is = (o:any):boolean => {
        return o && o.CollectionChanged instanceof nullstone.Event;
    };
}
