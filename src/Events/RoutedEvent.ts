import RoutedEventArgs = core.events.RoutedEventArgs;

module core.events {
    export class RoutedEvent<T extends RoutedEventArgs> extends nullstone.Event<T> {
    }
}