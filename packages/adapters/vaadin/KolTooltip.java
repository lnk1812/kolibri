package de.itzbund.oss.kolibri.components;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.dependency.NpmPackage;

/**
 * <kol-alert _type="warning">Die **Tooltip**-Komponente wird innerhalb von KoliBri verwendet und ist nicht dafür vorgesehen in der Anwendungsentwicklung verwendet zu werden. Denn der Tooltip ist nur dann wirklich barrierefrei, wenn von einem Referenzelement auf das Tooltip verwiesen wird.</kol-alert>

Die **Tooltip**-Komponente implementiert das Gegenstück zum `Aria-Label`. Es ist also explizit nur dafür vorgesehen, dem/der Nutzer:in ohne Screenreader die Beschriftung eines Elementes anzuzeigen.

Ein geöffneter Tooltip lässt sich mit der `Escape`-Taste schließen, um ggf. überlagerte Seiteninformationen wieder sichtbar zu machen.

**Hinweis:** Damit der Tooltip korrekt ausgerichtet wird, darf das Referenz-Element nicht `display: inline` haben.
 */

@Tag("kol-tooltip")
@NpmPackage(value = "@public-ui/components", version = "1.5.0")
@JsModule("@public-ui/components/dist/components/kol-tooltip")
public class KolTooltip extends Component {
	/**
	 * Setzt die Ausrichtung des Tooltips in Relation zum Elternelement.
	 *
	 * @param value String
	 */
	public void setAlign(final String value) {
		getElement().setProperty("_align", value);
	}

	/**
	 * Setzt die Ausrichtung des Tooltips in Relation zum Elternelement.
	 *
	 * @return String
	 */
	public String getAlign() {
		return getElement().getProperty("_align", null);
	}

	/**
	 * Gibt die ID an, wenn z.B. Aria-Labelledby (Link) verwendet wird.
	 *
	 * @param value String
	 */
	public void setId(final String value) {
		getElement().setProperty("_id", value);
	}

	/**
	 * Gibt die ID an, wenn z.B. Aria-Labelledby (Link) verwendet wird.
	 *
	 * @return String
	 */
	public String getId() {
		return getElement().getProperty("_id", null);
	}

	/**
	 * Setzt den Text in dem Tooltip beim Fokussieren oder Maus-drüberfahren angezeigt wird.
	 *
	 * @param value String
	 */
	public void setLabel(final String value) {
		getElement().setProperty("_label", value);
	}

	/**
	 * Setzt den Text in dem Tooltip beim Fokussieren oder Maus-drüberfahren angezeigt wird.
	 *
	 * @return String
	 */
	public String getLabel() {
		return getElement().getProperty("_label", null);
	}
}
