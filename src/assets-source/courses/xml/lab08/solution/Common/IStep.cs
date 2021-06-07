namespace Lab08.Common
{
    interface IStep
    {
        void Execute();
    }

    interface IDocumentAwareStep<T>
    {
        void Execute(T document);
    }
}
