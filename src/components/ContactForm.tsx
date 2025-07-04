import {
  Card,
  CardContent,
  Stack,
  Typography,
  TextField,
  CardActions,
  Button,
} from "@mui/material";

function ContactForm() {
  return (
    <form>
      <Card sx={{ padding: "1rem 2rem" }}>
        <Typography
          variant="h3"
          fontSize="1.8rem"
          fontWeight="bold"
          textTransform="capitalize"
          padding="0.5rem 1rem"
        >
          send us a message
        </Typography>
        <CardContent>
          <Stack
            direction="row"
            display="flex"
            justifyContent="space-between"
            gap={2}
            pb="0.5rem"
          >
            <Stack flexGrow={1}>
              <Typography
                variant="h5"
                fontSize="0.9rem"
                padding="0.5rem 0.2rem"
              >
                First Name*
              </Typography>
              <TextField
                placeholder="Nathanael"
                size="small"
                style={{ fontSize: "0.1rem" }}
              />
            </Stack>
            <Stack flexGrow={1}>
              <Typography
                variant="h5"
                fontSize="0.9rem"
                padding="0.5rem 0.2rem"
              >
                Last Name*
              </Typography>
              <TextField
                placeholder="Mutua"
                size="small"
                sx={{ fontSize: "0.8rem" }}
              />
            </Stack>
          </Stack>
          <Stack padding="0.5rem 0">
            <Typography variant="h5" fontSize="0.9rem" padding="0.5rem 0.2rem">
              Email Address*
            </Typography>
            <TextField
              placeholder="name@example.com"
              size="small"
              sx={{ fontSize: "0.8rem" }}
            />
          </Stack>
          <Stack padding="0.5rem 0">
            <Typography variant="h5" fontSize="0.9rem" padding="0.5rem 0.2rem">
              Subject*
            </Typography>
            <TextField
              placeholder="safari booking"
              size="small"
              sx={{ fontSize: "0.8rem" }}
            />
          </Stack>
          <Stack padding="0.5rem 0">
            <Typography variant="h5" fontSize="0.9rem" padding="0.5rem 0.2rem">
              Message
            </Typography>
            <TextField
              placeholder="Tell us about your dream adventure or safari"
              multiline
              minRows={4}
              maxRows={5}
              sx={{ fontSize: "0.8rem" }}
            />
          </Stack>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "1rem",
          }}
        >
          <Button
            variant="contained"
            sx={{ textTransform: "capitalize", width: "100%" }}
          >
            Send
          </Button>
        </CardActions>
      </Card>
    </form>
  );
}

export default ContactForm;
