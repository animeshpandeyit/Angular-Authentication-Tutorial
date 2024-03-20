const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const User = require("../models/user");

const mongoose = require("mongoose");
const user = require("../models/user");

mongoose
  .connect(
    "mongodb+srv://animeshpandeyit:Animesh%40123@cluster0.9eu8aev.mongodb.net/"
  )

  .then(() => console.log("Connected Successfully"))

  .catch((err) => {
    console.error(err);
  });

router.get("/", (req, res) => {
  res.send("From API endpoint...");
});

// router.post("/register", async (req, res) => {
//   let userData = req.body;

//   let user = new User(userData);

//   user.save((error, registeredUser) => {
//     if (error) {
//       res.send(error);
//     }
//     res.status(200).send(registeredUser);
//   });
// });

router.post("/register", async (req, res) => {
  try {
    let userData = req.body;
    let user = new User(userData);
    const registeredUser = await user.save();
    let payload = { subject: registeredUser._id };
    let token = jwt.sign(payload, "secretKey");
    res.status(200).send({
      message: "success",
      user: registeredUser,
      token: token,
    });
    // res.status(200).send(registeredUser);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    let userData = req.body;
    const user = await User.findOne({ email: userData.email });
    // User.findOne({ email: userData.email }, (err, user) => {
    //   if (err) {
    //     console.log(err.message);
    //   } else {
    //     if (!user) {
    //       res.status(401).send("User not found");
    //     } else {
    //       if (user.password !== userData.password) {
    //         res.status(401).send("Invalid password");
    //       } else {
    //         res.status(200).send(user);
    //       }
    //     }
    //   }
    // });
    if (!user) {
      res.status(401).send("User not found");
      return;
    }
    if (user.password !== userData.password) {
      res.status(401).send("Invalid password");
      return;
    }
    let payload = { subject: user._id };
    let token = jwt.sign(payload, "secretKey");
    res.status(200).send({
      message: `${user.email} successfully logged in..`,
      user: user,
      token: token,
    });
  } catch (error) {
    // Handle any errors
    res.status(500).send(error);
  }
});

router.get("/getallusers", async (req, res) => {
  try {
    const allusers = await user.find({});
    res.status(200).json({
      success: true,
      data: allusers,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/events", (req, res) => {
  const events = [
    {
      id: 1,
      title: "Conference",
      date: "2024-04-10",
      location: "New York City",
      description: "Annual conference for professionals in the tech industry.",
      attendees: ["John Doe", "Jane Smith", "Alice Johnson"],
      organizer: "TechEvents Inc.",
    },
    {
      id: 2,
      title: "Workshop",
      date: "2024-05-15",
      location: "Los Angeles",
      description: "Hands-on workshop on web development.",
      attendees: ["David Brown", "Emily White", "Michael Lee"],
      organizer: "Code Academy",
    },
    {
      id: 3,
      title: "Seminar",
      date: "2024-06-20",
      location: "Chicago",
      description: "Seminar discussing the future of artificial intelligence.",
      attendees: ["Sarah Green", "Robert Clark", "Olivia Martinez"],
      organizer: "AI Institute",
    },
    {
      id: 4,
      title: "Hackathon",
      date: "2024-07-25",
      location: "San Francisco",
      description:
        "A 48-hour coding competition to build innovative solutions.",
      attendees: ["Alex Johnson", "Sophia Davis", "Daniel Wilson"],
      organizer: "TechHackers United",
    },
    {
      id: 5,
      title: "Panel Discussion",
      date: "2024-08-30",
      location: "Seattle",
      description: "Panel discussion on renewable energy and sustainability.",
      attendees: ["Emma Taylor", "James Brown", "Ella Garcia"],
      organizer: "GreenTech Alliance",
    },
    {
      id: 6,
      title: "Networking Event",
      date: "2024-09-15",
      location: "Boston",
      description:
        "Opportunity to network with professionals from various industries.",
      attendees: ["Liam Smith", "Ava Johnson", "Noah Martinez"],
      organizer: "Business Connect",
    },
    {
      id: 7,
      title: "Product Launch",
      date: "2024-10-20",
      location: "Austin",
      description: "Launch event for a new innovative product.",
      attendees: ["Sophie Miller", "William Anderson", "Isabella Wilson"],
      organizer: "Tech Innovations Ltd.",
    },
    {
      id: 8,
      title: "Training Session",
      date: "2024-11-05",
      location: "Miami",
      description: "Training session on project management best practices.",
      attendees: ["Lucas Martinez", "Avery Brown", "Mia Taylor"],
      organizer: "Project Management Institute",
    },
    {
      id: 9,
      title: "Industry Summit",
      date: "2024-12-10",
      location: "Denver",
      description: "Gathering of industry leaders to discuss future trends.",
      attendees: ["Jack Wilson", "Chloe Davis", "Ethan Garcia"],
      organizer: "Industry Leaders Forum",
    },
    {
      id: 10,
      title: "Expo",
      date: "2025-01-15",
      location: "Orlando",
      description: "Exhibition showcasing the latest technology innovations.",
      attendees: ["Harper Johnson", "Logan Brown", "Luna Martinez"],
      organizer: "Tech Expo Inc.",
    },
  ];
  res.json(events);
  console.log(events);
});

router.get("/special", (req, res) => {
  const events = [
    {
      id: 1,
      title: "Conference",
      date: "2024-04-10",
      location: "New York City",
      description: "Annual conference for professionals in the tech industry.",
      attendees: ["John Doe", "Jane Smith", "Alice Johnson"],
      organizer: "TechEvents Inc.",
    },
    {
      id: 2,
      title: "Workshop",
      date: "2024-05-15",
      location: "Los Angeles",
      description: "Hands-on workshop on web development.",
      attendees: ["David Brown", "Emily White", "Michael Lee"],
      organizer: "Code Academy",
    },
    {
      id: 3,
      title: "Seminar",
      date: "2024-06-20",
      location: "Chicago",
      description: "Seminar discussing the future of artificial intelligence.",
      attendees: ["Sarah Green", "Robert Clark", "Olivia Martinez"],
      organizer: "AI Institute",
    },
    {
      id: 4,
      title: "Hackathon",
      date: "2024-07-25",
      location: "San Francisco",
      description:
        "A 48-hour coding competition to build innovative solutions.",
      attendees: ["Alex Johnson", "Sophia Davis", "Daniel Wilson"],
      organizer: "TechHackers United",
    },
    {
      id: 5,
      title: "Panel Discussion",
      date: "2024-08-30",
      location: "Seattle",
      description: "Panel discussion on renewable energy and sustainability.",
      attendees: ["Emma Taylor", "James Brown", "Ella Garcia"],
      organizer: "GreenTech Alliance",
    },
  ];
  res.json(events);
  console.log(events);
});

module.exports = router;
