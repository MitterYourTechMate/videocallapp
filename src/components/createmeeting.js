import React, { useState } from "react"
import { TextField, Button, Typography } from "@mui/material"

const CreateMeeting = () => {
  const [roomId, setRoomID] = useState("")
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h3" component="h1">
        Video calls and meetings for everyone
      </Typography>
      <Typography variant="h6" component="h2">
        Connect, collaborate and celebrate from anywhere with ZEGOCLOUD
      </Typography>
      <div style={{ display: "flex", gap: "10px", marginTop: "5%" }}>
        <TextField
          onChange={(event) => setRoomID(event.target.value)}
          placeholder="Enter Meeting ID"
          size="medium"
        ></TextField>
        <Button
          href={`http://localhost:3001/room?roomId=${roomId}`}
          variant="contained"
        >
          CREATE MEETING
        </Button>
      </div>
    </div>
  )
}

export default CreateMeeting
