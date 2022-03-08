package Llenguatges.filtros;

import java.util.Locale;

public class Filtering
{
    int mida;
    double maxim, delta;

    public Filtering(int mida, double maxim)
    {
        this.mida = mida;
        this.maxim = maxim;
        this.delta = maxim / (mida - 1);
    }

    public void processar()
    {
        double brillo = 0.0;
        for (int i = 0; i < mida; i++)
        {
            double contraste = 0.0;
            for (int j = 0; j < mida; j++)
            {
                System.out.format("<div>brightness(%.2f)<br/>contrast(%.2f)</div>\n", brillo, contraste);
                contraste += delta;
            }
            brillo += delta;
        }
        int contador = 0;
        brillo = 0.0;
        for (int i = 0; i < mida; i++)
        {
            double contraste = 0.0;
            for (int j = 0; j < mida; j++)
            {
                System.out.format("div > div:nth-of-type(%d):hover ~ img {\n", ++contador);
                System.out.format("\tfilter: brightness(%.2f) contrast(%.2f);\n}\n", brillo, contraste);
                contraste += delta;
            }
            brillo += delta;
        }
    }

    public static void main(String[] args)
    {
        Locale.setDefault(Locale.ROOT);
        Filtering f = new Filtering(7, 3.0);
        f.processar();
    }
}