using LINQ.Model;
using System.Collections.Generic;

namespace LINQ.Service
{
    public interface IPersonService
    {
        IEnumerable<Person> GetPeople();
    }
}
