from manimlib import *

class SquareToCircle(Scene):
    def construct(self):

        
        # Criar o círculo com borda branca
        circle = Circle()
        circle.set_stroke(WHITE, width=4)  # Definindo a borda branca e a espessura
        
        # Criar o quadrado
        square = Square()
        
        # Animar o quadrado e a transformação
        self.play(ShowCreation(square))
        self.wait()
        self.play(ReplacementTransform(square, circle))
        self.wait()
