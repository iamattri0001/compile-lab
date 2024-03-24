export const templates = {
  "c++": `#include <bits/stdc++.h>
using namespace std;

int main() {
  cout << "Hello, world!" << endl;  
  return 0;
}
    `,
  c: `#include <stdio.h> 

int main() {    
  printf("Hello, world!");
  return 0;
}
    `,
  javascript: `console.log("Hello, world!");
    `,
  java: `public class Main {    

  public static void main(String[] args) {
    System.out.println("Hello, world!");
  }

}`,
  csharp: `using System;

class Program {

  static void Main(string[] args) {
    Console.WriteLine("Hello, world!");
  }
  
}
`,
};
