import RoutedEventArgs = fletch.events.RoutedEventArgs;

module fletch.events {
    export class RoutedEvent<T extends RoutedEventArgs> extends nullstone.Event<T> {
    }
}