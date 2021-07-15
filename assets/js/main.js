// Es gibt 3 verschiedene Methoden zur Verkettung in Javascript.
// Deklariere zwei Variablen: x mit String "Hello " und y mit String "World<br>".
let x = "Hello ";
let y = "World<br>";

// 1.   Addiere x mit y und speichere das Ergebnis als Variable z;
//      Nutze den Befehl document.write() mit Wert z zwischen Klammern um im Dokument
//      Werte anzuzeigen. Es wird im HTML Dokument angezeigt.
// Deklariere zwei Variablen:
let z = x + y;
document.write(z);

// 2.   Schreibe x + " " + y und speichere alles in der Variable n;
//      Nutze den Befehl document.write() mit Wert n;
let n = x + " " + y;
document.write(n);

// 3.   Addiere x und String "World" mit dem passenden Zuweisungsoperator.
x += "World";

// 4.   Nutze den Befehl document.write() mit Wert x den String im Dokument auszugeben;
document.write(x);


// Deklariere zwei Variablen: meinString mit String "Ich bin Erster";
// Nutze einen Zuweisungsoperator, um einen anderen String " Ich komme auf Platz zwei", zu meinString hinzuzufügen.
// Gebe dann meinString in der Konsole aus.
let meinString = "Ich bin Erster";
let deinString = " Ich komme auf Platz zwei";
meinString += deinString;
console.log(meinString);