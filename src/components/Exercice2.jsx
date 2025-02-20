import Exercice from "./container/Exercice";

export default function Exercice2() {
	// 1. Crée un state qui garde en mémoire la valeur de l'input.
	// 2. Implémente une fonction pour mettre à jour la valeur du state lorsque l'utilisateur tape dans l'input.
	// 3. Passe la fonction de mise à jour au champ de texte pour qu'il soit contrôlé.
	// 4. Affiche la valeur du state sous le champ de texte.
	return (
		<Exercice>
			<h2>Exercice 2 : Input contrôlé</h2>
			<p className="instructions">
				Modifie le composant Exercice2 pour affichez la valeur du champ de texte
				sous celui-ci.
			</p>
			<div className="solution">
				<div>
					<input type="text" />
					<p>"Valeur de l'input"</p>
				</div>
			</div>
		</Exercice>
	);
}
