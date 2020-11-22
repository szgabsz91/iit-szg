<h3>LINQ</h3>
  
  <p>Feladat: írjunk C# alkalmazást LINQPadben!</p>
  
  <p>A program váza letölthető <a href="courses/dbmsc/gyak05.linq">innen</a>.</p>
  
  <p>A két implementálandó metódus:</p>
  
  <ul>
    <li><i>UseExpressions</i>: az eredményt egyetlen összefüggú LINQ kifejezéssel állítsuk elő</li>
    <li><i>UseMethods</i>: az eredményt egymáshoz láncolt metódushívásokkal állítsuk elő egyetlen lépésben</li>
  </ul>
  
  <p>A feladat részlépései:</p>
  
  <ul>
    <li>Kapcsoljuk össze a személyeket és autókat a FirstName, LastName és Owner propertykkel.</li>
    <li>Csoportosítsuk a párokat a személy fizetésében szereplő számjegyek száma szerint.</li>
    <li>A csoportok értéke legyen a csoportban szereplő autók összára.</li>
    <li>Az így kapott (fizetés számjegyeinek száma, autók összára) párokat rendezzük az autók összárai szerint csökkenő sorrendbe.</li>
    <li>Írassuk ki a konzolra a kapott párokat egy-egy sorba.</li>
  </ul>
  
  <p>Az egyszerűség kedvéért a részlépések eredményeihez használjunk névtelen típusokat.</p>
  
  <p>A metódusok dokumentációja és kódpéldák találhatóak <a href="https://msdn.microsoft.com/en-us/library/system.linq.enumerable_methods(v=vs.100).aspx" class="newWindow">innen</a> kiindulva.</p>

  ---

  <Query Kind="Program" />

void Main()
{
	var personService = new PersonService();
	var carService = new CarService();
	
	IEnumerable<Person> people = personService.GetPeople();
	IEnumerable<Car> cars = carService.GetCars();
	
	UseExpressions(people, cars);
	UseMethods(people, cars);
}

void UseExpressions(IEnumerable<Person> people, IEnumerable<Car> cars)
{
	foreach (var person in people)
	{
		Console.WriteLine("{0}", person);
	}
}

void UseMethods(IEnumerable<Person> people, IEnumerable<Car> cars)
{
	foreach (var car in cars)
	{
		Console.WriteLine("{0}", car);
	}
}

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

public class Car
{
	public string PlateNumber { get; set; }
	public string Manufacturer { get; set; }
	public decimal Price { get; set; }
	public string Owner { get; set; }
	public override string ToString()
	{
		return string.Format("Car[PlateNumber = {0}, Manufacturer = {1}, Price = {2}, Owner = {3}]", PlateNumber, Manufacturer, Price, Owner);
	}
}

public interface IPersonService
{
	IEnumerable<Person> GetPeople();
}

public interface ICarService
{
	IEnumerable<Car> GetCars();
}

public class PersonService : IPersonService
{
	private static readonly List<Person> PEOPLE;
	
	static PersonService()
	{
		PEOPLE = new List<Person>
		{
			new Person
			{
				FirstName = "Anne",
				LastName = "Walker",
				Salary = 30
			},
			new Person
			{
				FirstName = "Michael",
				LastName = "Smith",
				Salary = 1000
			},
			new Person
			{
				FirstName = "George",
				LastName = "White",
				Salary = 50
			},
			new Person
			{
				FirstName = "Tom",
				LastName = "Brown",
				Salary = 200
			},
			new Person
			{
				FirstName = "Emma",
				LastName = "Jones",
				Salary = 150
			}
		};
	}
	
	public IEnumerable<Person> GetPeople()
	{
		return PEOPLE;
	}
}

public class CarService : ICarService
{
	private static readonly List<Car> CARS;
	
	static CarService()
	{
		CARS = new List<Car>()
		{
			new Car
			{
				PlateNumber = "ABC-123",
				Manufacturer = "Audi",
				Price = 6.8M,
				Owner = "Michael Smith"
			},
			new Car
			{
				PlateNumber = "ABC-124",
				Manufacturer = "Honda",
				Price = 7.2M,
				Owner = "Tom Brown"
			},
			new Car
			{
				PlateNumber = "ABC-125",
				Manufacturer = "Mercedes",
				Price = 23M,
				Owner = "Michael Smith"
			},
			new Car
			{
				PlateNumber = "ABC-126",
				Manufacturer = "Opel",
				Price = 3.1M,
				Owner = "Emma Jones"
			},
			new Car
			{
				PlateNumber = "ABC-127",
				Manufacturer = "Renault",
				Price = 3.9M,
				Owner = "George White"
			},
			new Car
			{
				PlateNumber = "ABC-128",
				Manufacturer = "BMW",
				Price = 8.9M,
				Owner = "Emma Jones"
			},
			new Car
			{
				PlateNumber = "ABC-129",
				Manufacturer = "Trabant",
				Price = 0.3M,
				Owner = "Anne Walker"
			},
			new Car
			{
				PlateNumber = "ABC-130",
				Manufacturer = "Fiat",
				Price = 2.9M,
				Owner = "Tom Brown"
			},
			new Car
			{
				PlateNumber = "ABC-131",
				Manufacturer = "Mazda",
				Price = 3.4M,
				Owner = "Michael Smith"
			}
		};
	}
	
	public IEnumerable<Car> GetCars()
	{
		return CARS;
	}
}

gyak05 folder

=== MD

Feladat: írjunk C# alkalmazást LINQPadben!

A program váza letölthető [innen](courses/db-msc/practice05_start.zip).

A két implementálandó metódus:

* `UseExpressions`: az eredményt egyetlen összefüggú LINQ kifejezéssel állítsuk elő
* `UseMethods`: az eredményt egymáshoz láncolt metódushívásokkal állítsuk elő egyetlen lépésben

A feladat részlépései:

* Kapcsoljuk össze a személyeket és autókat a `FirstName`, `LastName` és `Owner` propertykkel.
* Csoportosítsuk a párokat a személy fizetésében szereplő számjegyek száma szerint.
* A csoportok értéke legyen a csoportban szereplő autók összára.
* Az így kapott (fizetés számjegyeinek száma, autók összára) párokat rendezzük az autók összárai szerint csökkenő sorrendbe.
* Írassuk ki a konzolra a kapott párokat egy-egy sorba.

Az egyszerűség kedvéért a részlépések eredményeihez használjunk névtelen típusokat.

A metódusok dokumentációja és kódpéldák találhatóak [innen](https://msdn.microsoft.com/en-us/library/system.linq.enumerable_methods%28v=vs.100%29.aspx) kiindulva.

