package exercicios;
/*
 * 6 - Crie um programa que, dado um dia da semana, verifique se é final de semana.
 */

import java.util.Scanner;

public class FinalSemana {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);

		System.out.println("Digite o dia da semana:");
		String dia = scan.next().replaceAll("á", "a");
		if ((dia.equalsIgnoreCase("sabado")) || (dia.equalsIgnoreCase("domingo"))) {
			System.out.println("Final de semana.");
		} else {
			System.out.println("Dia normal.");
		}
		scan.close();
	}
}
