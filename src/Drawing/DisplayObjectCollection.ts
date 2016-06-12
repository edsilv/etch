import ObservableCollection = etch.collections.ObservableCollection;

module etch.drawing{
    export class DisplayObjectCollection<T extends IDisplayObject> extends ObservableCollection<T> {

        constructor(){
            super();

            this.CollectionChanged.on(() => {
                // update ZIndex properties
                for (var i = 0; i < this.Count; i++){
                    var obj: IDisplayObject = this.GetValueAt(i);
                    obj.zIndex = i;
                }
            }, this)
        }

        public add(value: T){
            super.Add(value);
        }

        public addRange (values: T[]){
            super.AddRange(values);
        }

        public remove (value: T): boolean {
            return super.Remove(value);
        }

        // todo: use utils.Collections.swap
        public swap(obj1: T, obj2: T){
            var obj1Index = this.IndexOf(obj1);
            var obj2Index = this.IndexOf(obj2);

            this.setIndex(obj1, obj2Index);
            this.setIndex(obj2, obj1Index);
        }

        public toFront(obj: T){
            var index = 0;
            if (this.Count > 0){
                index = this.Count - 1;
            }
            this.setIndex(obj, index);
        }

        public toBack(obj: T){
            this.setIndex(obj, 0);
        }

        public setIndex(obj: T, index: number){
            if (index > this.Count || index < 0){
                throw new etch.exceptions.Exception("index out of range");
            }

            this.Remove(obj);
            this.Insert(index, obj);
        }

        get bottom(): T{
            return this.GetValueAt(0);
        }

        get top(): T{
            return this.GetValueAt(this.Count - 1);
        }
    }
}