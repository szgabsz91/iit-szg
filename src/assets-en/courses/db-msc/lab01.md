<h3>XML ismétlés - XML Schema</h3>
  
  <ul>
    <li>
	  Feltételek:
	  <ul>
	    <li>van saját névtér</li>
		<li>2 séma: egy a személyeknek és dispatchereknek és egy a hívásoknak. A 2 séma névtere különböző, a másodikra hivatkozik a dokumentum és az húzza be az első sémát.</li>
		<li>Minden típus nevesített</li>
		<li>2 elsődleges kulcs és 2 idegen kulcs kell a megfelelő mezőkre</li>
	  </ul>
	</li>
  </ul>
  
  <ul>
    <li>
	  Személyek, dispatcherek
	  <ul>
	    <li>Személy: vezetéknév + keresztnév + id attribútum</li>
		<li>Telefonszám: szám (regexp) + körzet (default: 46)</li>
		<li>Dispatcher (üres elem a személyen belül)</li>
		<li>Dispatcher telefonszáma: ugyanaz az elemnév, de a típusában kell lenni egy mellék attribútumnak is</li>
		<li>A dispatcher egy személy, amiből már tilos leszármaztatni</li>
	  </ul>
	</li>
	<li>
	  Hívások
	  <ul>
	    <li>Hívás: id, dátum, időpont, időtartam, hívó (személy), dispatcher, tartalom</li>
		<li>Panasz: speciális hívás, aminek a tartalma minimum 100 karakter hosszú és van plusz egy fontosság gyerekeleme is (lehetséges értékek: kritikus, magas, alacsony)</li>
	  </ul>
	</li>
  </ul>

=== MD

* Feltételek:
    * van saját névtér
    * 2 séma: egy a személyeknek és dispatchereknek és egy a hívásoknak. A 2 séma névtere különböző, a másodikra hivatkozik a dokumentum és az húzza be az első sémát.
    * Minden típus nevesített
    * 2 elsődleges kulcs és 2 idegen kulcs kell a megfelelő mezőkre

* Személyek, dispatcherek
    * Személy: vezetéknév + keresztnév + id attribútum
    * Telefonszám: szám (regexp) + körzet (default: 46)
    * Dispatcher (üres elem a személyen belül)
    * Dispatcher telefonszáma: ugyanaz az elemnév, de a típusában kell lenni egy mellék attribútumnak is
    * A dispatcher egy személy, amiből már tilos leszármaztatni

* Hívások
    * Hívás: id, dátum, időpont, időtartam, hívó (személy), dispatcher, tartalom
    * Panasz: speciális hívás, aminek a tartalma minimum 100 karakter hosszú és van plusz egy fontosság gyerekeleme is (lehetséges értékek: kritikus, magas, alacsony)
