import img1 from "../assets/img/avatar-mark-webber.webp";
import img2 from "../assets/img/avatar-angela-gray.webp";
import img3 from "../assets/img/avatar-jacob-thompson.webp";
import img4 from "../assets/img/avatar-rizky-hasanuddin.webp";
import img5 from "../assets/img/avatar-kimberly-smith.webp";
import img6 from "../assets/img/avatar-nathan-peterson.webp";
import img7 from "../assets/img/avatar-anna-kim.webp";
import chessImg from "../assets/img/image-chess.webp";

export const PersonsInfo = [
	{
		id: 1,
		name: "Mark Webber",
		picture: img1,
		desc: "reacted to your recent post",
		occassion: "My first tournament today!",
		time: "1m",
		dot: true,
	},
	{
		id: 2,
		name: "Angela Gray",
		picture: img2,
		desc: "followed you",
		time: "5m",
		dot: true,
	},
	{
		id: 3,
		name: "Jacob Thompson",
		picture: img3,
		desc: "has joined your group",
		time: "1 day",
		club: "Chess Club",
		dot: true,
	},
	{
		id: 4,
		name: "Rizky Hasanuddin",
		picture: img4,
		desc: "sent you a private message",
		time: "5 day",
		message:
			"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
	},
	{
		id: 5,
		name: "Kimberly Smith",
		picture: img5,
		desc: "commented on your picture",
		time: "1 week",
		secondPicture: chessImg,
	},
	{
		id: 6,
		name: "Nathan Peterson",
		picture: img6,
		desc: "reacted to your recent post",
		occassion: "5 end-game strategies to increase your win rate",
		time: "2 weeks",
	},
	{
		id: 7,
		name: "Anna Kim",
		picture: img7,
		desc: "left the group",
		occassion: "Chess Club",
		time: "2 weeks",
	},
];
