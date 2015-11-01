import RoutedEventArgs = etch.events.RoutedEventArgs;

module etch.events {
    export class RoutedEvent<T extends RoutedEventArgs> extends nullstone.Event<T> {
    }
}