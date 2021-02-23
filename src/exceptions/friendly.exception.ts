
export class FriendlyException extends Error {
    /**
     * Creates a friendly exception
     * @message text to show user
     */
    constructor(message: string) {
        super(message);
    }
}