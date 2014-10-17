/**
 * @(#)Animals.java
 *
 * Sample Applet application
 *
 * @author 
 * @version 1.00 06/04/05
 */
 
import java.awt.*;
import java.applet.*;
import java.awt.event.*;
public class Animals extends Applet implements ActionListener {
	Image[] pics = new Image[12];
	Image current;
	int dob;
	Label lab=new Label("Enter your dob");
	TextField tf=new TextField(4);
	Button b=new Button("Click for Pic");
	
	public void init() {
		pics[0]=getImage(getDocumentBase(),"rat.jpg");
		pics[1]=getImage(getDocumentBase(),"ox.jpg");
		pics[2]=getImage(getDocumentBase(),"tiger.jpg");
		pics[3]=getImage(getDocumentBase(),"rabbit.jpg");
		pics[4]=getImage(getDocumentBase(),"dragon.jpg");
		pics[5]=getImage(getDocumentBase(),"snake.jpg");
		pics[6]=getImage(getDocumentBase(),"horse.jpg");
		pics[7]=getImage(getDocumentBase(),"sheep.jpg");
		pics[8]=getImage(getDocumentBase(),"monkey.jpg");
		pics[9]=getImage(getDocumentBase(),"rooster.jpg");
		pics[10]=getImage(getDocumentBase(),"dog.jpg");
		pics[11]=getImage(getDocumentBase(),"pig.jpg");
		//current=getImage(getDocumentBase(),"tiger.jpg");
		current=pics[2]; // could do this also!
		add(lab);
		add(tf);
		add(b);
		b.addActionListener(this);		
	}

	public void paint(Graphics g) {
	g.drawImage(current,50,50,this);
	}
	public void actionPerformed(ActionEvent ae){
	dob=Integer.parseInt(tf.getText());
	dob=dob-1900;
	current=pics[dob % 12];
	repaint();	
	}
}
 