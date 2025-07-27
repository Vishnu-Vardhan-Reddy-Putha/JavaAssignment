/* 15.Write a program to construct an array with 10 elements and to find the number of    
occurrences of each element in the Array.
*/
package assignment;

import java.util.*;

public class FrequencyUsingArrays {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] arr = new int[10];
        int[] freq = new int[10];  
        boolean[] visited = new boolean[10]; 

        
        System.out.println("Enter 10 integers:");
        for (int i = 0; i < arr.length; i++) {
            arr[i] = sc.nextInt();
        }

        
        for (int i = 0; i < arr.length; i++) {
            if (!visited[i]) {
                int count = 1;
                for (int j = i + 1; j < arr.length; j++) {
                    if (arr[i] == arr[j]) {
                        count++;
                        visited[j] = true;
                    }
                }
                freq[i] = count;
                visited[i] = true;
            }
        }

        
        System.out.println("\nElement Frequencies:");
        for (int i = 0; i < arr.length; i++) {
            if (freq[i] != 0) {
                System.out.println(arr[i] + " occurs " + freq[i] + " times");
            }
        }

        sc.close();
    }
}

/* 
Enter 10 integers:
2 5 7 2 6 7 5 6 9 5

Element Frequencies:
2 occurs 2 times
5 occurs 3 times
7 occurs 2 times
6 occurs 2 times
9 occurs 1 times
*/