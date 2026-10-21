/*
            do while

=> Semelhante ao while, mas a condição é verificada no final do loop.

=> faça tal coisa enquanto a condição for verdadeira.
*/ 

let i = 0;

do {
    console.log(i);
    i++;
}while (i < 5);


let x = 100

do {
    console.log(x/2);
    x = x - 5;
}while (x >= 0);


/*
Execução passo a passo

Valor de x antes	x / 2 (impresso)	Novo valor de x depois de x - 5
    
    100	              50	                         95
    95	              47.5	                         90
    90	              45	                         85
    85	              42.5	                         80
    80	              40	                         75
    75	              37.5	                         70
    70	              35	                         65
    65	              32.5	                         60
    60	              30	                         55
    55	              27.5	                         50
    50	              25	                         45
    45	              22.5	                         40
    40	              20	                         35
    35	              17.5	                         30
    30	              15	                         25
    25	              12.5	                         20
    20	              10	                         15
    15	              7.5	                         10
    10	              5	                             5
    5	              2.5	                         0
    0	              0	                            -5


*/ 