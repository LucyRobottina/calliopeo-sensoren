/**
 * Weitere Informationen zu der Programmierung der Sensoren findest du hier: 
 * 
 * https://calliope.cc/calliope-mini/erweiterungen/sensoren
 * 
 * oder auf der CalliopEO-Seite:
 * 
 * https://calliope.cc/calliopeo
 */
/**
 * Auf der linken Seite findest du unter den Blöcken drei bereits hinzugefügte Pakete mit einem "Zahnrad-Symbol":
 * 
 * - TCS34725 ist der Farbsensor, womit du die Lichtzusammensetzung aus den Farben rot, grün, blau und weiß messen kannst.
 * 
 * - SI1145 ist der Sonnenlichtsensor mit dem du die fürs menschliche Auge unsichtbare Ultraviolett- (UV) und Infrarot-Strahlung (IR), sowie die Lichtstärke des sichtbaren Lichts messen kannst.
 * 
 * - SCD30 ist der Umweltsensor mit dem du die Luftfeuchtigkeit, Temperatur, als auch den CO2-Gehalt messen kannst.
 */
input.onButtonPressed(Button.B, function () {
    SCD30.setCalibration400ppm()
})
basic.forever(function () {
    basic.showNumber(SCD30.readCO2())
    basic.pause(100)
})
