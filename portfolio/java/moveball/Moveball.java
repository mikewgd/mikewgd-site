/**
 * @(#)Moveball.java
 *
 * Sample Applet application
 *
 * @author 
 * @version 1.00 06/05/03
 */
 
import java.awt.*;
import java.applet.*;
import java.awt.event.*;
import java.util.*;

public class Moveball extends Applet implements ActionListener{
	int x=100;
	int y=100;
	Button b1=new Button("UP");
	Button b2=new Button("DOWN");
	Button b3=new Button("LEFT");
	Button b4=new Button("RIGHT");
	BorderLayout bl=new BorderLayout();
	
	public void init() {
		setLayout(bl);
		add(b1,BorderLayout.NORTH);
		add(b2,BorderLayout.SOUTH);
		add(b3,BorderLayout.WEST);
		add(b4,BorderLayout.EAST);
		b1.addActionListener(this);
		b2.addActionListener(this);
		b3.addActionListener(this);
		b4.addActionListener(this);
	}

	public void paint(Graphics g) {
	g.fillOval(x,y,20,20);
	}
	
	public void actionPerformed(ActionEvent ae){
		if(ae.getSource()==b1){
			y=y-10;
			repaint();
		}
		if(ae.getSource()==b2){
			y=y+10;
			repaint();
		}
		if(ae.getSource()==b3){
			x=x-10;
			repaint();
		}
		if(ae.getSource()==b4){
			x=x+10;
			repaint();
		}

		
		
}//ends actionperformed

}
