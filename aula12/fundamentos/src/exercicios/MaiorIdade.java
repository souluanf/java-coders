package exercicios;
/*
 * 5 - Crie um programa que receba um input do teclado com uma idade e retorne se é maior ou menor de idade.
 */
import java.util.Scanner;

public class MaiorIdade {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);

		System.out.printf("Digite sua idade: ");
		if (scan.nextInt() < 18) {
			System.out.printf("Menor de idade.");
		} else {
			System.out.printf("Maior de idade.");
		}
		scan.close();
	}
}
