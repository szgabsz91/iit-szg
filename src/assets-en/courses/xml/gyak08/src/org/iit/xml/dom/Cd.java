package org.iit.xml.dom;

public class Cd {
	
	private int id;
	private String title;
	private String artist;
	private String country;
	private String company;
	private double price;
	private int year;
	
	public Cd(int id, String title, String artist, String country, String company, double price, int year) {
		this.id = id;
		this.title = title;
		this.artist = artist;
		this.country = country;
		this.company = company;
		this.price = price;
		this.year = year;
	}
	
	public int getId() {
		return id;
	}
	
	public String getTitle() {
		return title;
	}
	
	public String getArtist() {
		return artist;
	}
	
	public String getCountry() {
		return country;
	}
	
	public String getCompany() {
		return company;
	}
	
	public double getPrice() {
		return price;
	}
	
	public int getYear() {
		return year;
	}
	
}
