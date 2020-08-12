package exercicios;
/*
 * 4 - Crie um programa que receba um nome e imprima uma saudação.
 */
import java.util.Scanner;

public class Saudacao {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		System.out.printf("Digite seu nome:");
		System.out.printf("Olá, %s!", scan.next());
		scan.close();
	}
}
