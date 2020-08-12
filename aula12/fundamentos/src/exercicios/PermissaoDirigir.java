package exercicios;

/*
 * 7 - Crie um programa que verifique se a pessoa tem todos os requisitos para dirigir.
 */

import java.util.Scanner;

public class PermissaoDirigir {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		System.out.printf("Digite sua idade: ");
		int idade = scan.nextInt();
		System.out.println("É habilitado?");
		String habilitado = scan.next();
		if ((idade >= 18) && (habilitado.equalsIgnoreCase("s") || habilitado.equalsIgnoreCase("sim"))) {
			System.out.println("Pode dirigir!");
		} else {
			System.out.println("Node dirigir!");
		}
		scan.close();
	}
}
