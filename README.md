Riešenie zadania:

Aplikáciu som vytváral cez create react app, konfiguračné súbory som nenahrával. 
Časti aplikácie som rozdelil na komponenty: 

Home - úvodná stránka so zoznamom kategórií a možnosťou funkčného pridania novej kategórie. Zoznam kategórii sa ťahá z API. Keď hoverujem nad zoznamom zobrazí text s počtom fotografií. Ten je zadaný napevno pri každej kategórií. Chcel som to spraviť cez premennú, ktorá zistí počet obrázkov v danej kategórií. Viem, že komponenty komunikujú cez props prostredníctvom rodiča, išiel som na to týmto spôsobom ale nedarilo sa mi to spraviť.

Architecture - komponent s galériou fotografií a a oknom pre upload obrázkov. Fotografie sa ťahajú z API. 

Komponent pre pridanie kategórie - komponent sa zobrazí po kliknutí na pridanie novej kategórie. Pridanie novej kategórie funguje. Po zadaní názvu do inputu a kliknutí na button pridať sa hodnota z inputu odošle na API ako meno kategórie a nastane refresh. Kategórie sa znova natiahnú z API už aj s novo pridanou kategóriou. Nové kategórie nemajú obrázok, defaultne kategórie ho majú - cesta k obrázkom je  zadaná v objektoch na API ako image.   

Komponent pre upload obrázkov - komponent sa zobrazí po kliknutí na upload obrázkov. Vyriešil som iba jeho vizuálnu časť, s funkcionalitou mám problémy. Myslím si, že to funguje podobným princípom ako pridanie kategórie, len s tým, že sa obrázok musí nahrať na server.  

