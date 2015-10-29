import RoutedEventArgs = etch.events.RoutedEventArgs;

namespace etch.events {
    export class RoutedEvent<T extends RoutedEventArgs> extends nullstone.Event<T> {
    }
}