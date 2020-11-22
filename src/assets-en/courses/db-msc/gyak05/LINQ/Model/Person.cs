namespace LINQ.Model
{
    public class Person
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public decimal Salary { get; set; }

        public override string ToString()
        {
            return string.Format("Person[FirstName = {0}, LastName = {1}, Salary = {2}]", FirstName, LastName, Salary);
        }
    }
}
