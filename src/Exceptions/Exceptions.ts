module etch.exceptions{
    export class Exception {
        Message: string;
        constructor(message: string) {
            this.Message = message;
        }
        toString(): string {
            var typeName = (<any>this).constructor.name;
            if (typeName)
                return typeName + ": " + this.Message;
            return this.Message;
        }
    }

    export class ArgumentException extends Exception {
        constructor(message: string) {
            super(message);
        }
    }

    export class ArgumentNullException extends Exception {
        constructor(message: string) {
            super(message);
        }
    }

    export class InvalidOperationException extends Exception {
        constructor(message: string) {
            super(message);
        }
    }

    export class NotSupportedException extends Exception {
        constructor(message: string) {
            super(message);
        }
    }

    export class IndexOutOfRangeException extends Exception {
        constructor(index: number) {
            super(index.toString());
        }
    }

    export class ArgumentOutOfRangeException extends Exception {
        constructor(msg: string) {
            super(msg);
        }
    }

    export class AttachException extends Exception {
        Data: any;
        constructor(message: string, data: any) {
            super(message);
            this.Data = data;
        }
    }

    export class InvalidJsonException extends Exception {
        JsonText: string;
        InnerException: Error;
        constructor(jsonText: string, innerException: Error) {
            super("Invalid json.");
            this.JsonText = jsonText;
            this.InnerException = innerException;
        }
    }

    export class TargetInvocationException extends Exception {
        InnerException: Exception;
        constructor(message: string, innerException: Exception) {
            super(message);
            this.InnerException = innerException;
        }
    }

    export class UnknownTypeException extends Exception {
        FullTypeName: string;
        constructor(fullTypeName: string) {
            super(fullTypeName);
            this.FullTypeName = fullTypeName;
        }
    }

    export class FormatException extends Exception {
        constructor(message: string) {
            super(message);
        }
    }
}
